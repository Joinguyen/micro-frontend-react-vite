/* eslint-disable jsx-a11y/anchor-is-valid */
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { DropdownIndicatorProps, components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { ButtonPrimary } from '../../forms/Buttons/ButtonPrimary/ButtonPrimary';
import { DrawerWrapper } from '../DrawerWrapper/DrawerWrapper';
import * as Yup from 'yup'
import './style.scss';
import { IUpdateRoom } from '../DrawerModel';
import { ARRAY_CATEGORY, ARRAY_HASHTAG, ARRAY_NUMBER_PEOPLE } from '../../../../../app/constants/room';
import CustomSelect from '../../forms/CustomSelect/CustomSelect';
import CustomInput from '../../forms/CustomInput/CustomInput';
import RadioGroup from '../../forms/CustomRadio/RadioGroup';
import Radio from '../../forms/CustomRadio/Radio';

type Props = {
    isShow?: boolean,
    className?: string,
    handleShow?: (isShow: boolean) => void
}
type Option = {
    value: string,
    label: string,
}

const DropdownIndicator = (
    props: DropdownIndicatorProps<Option, true>
) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#111111" />
            </svg>
        </components.DropdownIndicator>
    );
};

const validationSchema = Yup.object().shape({
    roomName: Yup.string()
        .min(5, '5~30자까지 가능 입력해주세요.')
        .max(30, '5~30자까지 가능 입력해주세요.')
        .required('반드시 필요합니다.'),
    numberPeople: Yup.object({
        label: Yup.string(),
        value: Yup.number()
            .typeError('숫자여야 합니다.')
            .min(3, '3명~200명까지 가능 입력해주세요.')
            .max(200, '3명~200명까지 가능 입력해주세요.')
    }).required('반드시 필요합니다.'),
    category: Yup.object({ label: Yup.string(), value: Yup.string() }).required('반드시 필요합니다.'),
    hashtags: Yup.array().of(Yup.object({ label: Yup.string(), value: Yup.string() })),
    disclosure: Yup.string().typeError('이 확인란을 선택하십시오.'),
    password: Yup.string().when('disclosure', {
        is: (disclosure: string | number) => (disclosure === 'true'),
        then: (schema) => schema.min(4, '4~8자리의 비밀번호를 입력해주세요.').max(8, '4~8자리의 비밀번호를 입력해주세요.').required('비밀번호가 필요합니다'),
    }),
});

const DrawerRoom: FC<Props> = ({ className, isShow = false, handleShow }) => {
    const navigate = useNavigate();

    const animatedComponents = makeAnimated();
    const [loading, setLoading] = useState(false);
    const initialValues: IUpdateRoom = {
        roomName: '',
        numberPeople: ARRAY_NUMBER_PEOPLE[0],
        category: ARRAY_CATEGORY[0],
        hashtags: [ARRAY_HASHTAG[0]],
        disclosure: 'false',
        password: '',
    }
    const onSubmit = (values: IUpdateRoom) => {
        setLoading(true);
        navigate("/chat/new-chat");
    };
    const handleClick = () => {
        handleShow && handleShow(false);
    };

    return (
        <>
            <DrawerWrapper handleShow={handleClick} isShow={isShow} title="방 만들기">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ touched, errors, values }: FormikProps<IUpdateRoom>) => (
                        <Form className='form'>
                            <div>
                                <div className="mb-10">
                                    <Field
                                        label='채팅방 명'
                                        type='text'
                                        name='roomName'
                                        className='form-control form-custom-input-border'
                                        placeholder='채팅방명을 입력하세요.'
                                        component={CustomInput}
                                    />
                                </div>

                                <div className="mb-10">
                                    <Field
                                        label='채팅 인원'
                                        name="numberPeople"
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        closeMenuOnSelect={true}
                                        defaultValue={ARRAY_NUMBER_PEOPLE[0]}
                                        options={ARRAY_NUMBER_PEOPLE}
                                        components={{ ...animatedComponents, DropdownIndicator }}
                                        component={CustomSelect}
                                        placeholder="채팅 인원"
                                        isMulti={false}
                                    />
                                </div>

                                <div className="mb-10">
                                    <Field
                                        label='카테고리'
                                        name='category'
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        closeMenuOnSelect={true}
                                        components={{ ...animatedComponents, DropdownIndicator }}
                                        defaultValue={ARRAY_CATEGORY[0]}
                                        options={ARRAY_CATEGORY}
                                        component={CustomSelect}
                                        isMulti={false}
                                    />
                                </div>

                                <div className="mb-10">
                                    <Field
                                        label='해시태그'
                                        name="hashtags"
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        closeMenuOnSelect={true}
                                        components={{ ...animatedComponents, DropdownIndicator }}
                                        defaultValue={[ARRAY_HASHTAG[0]]}
                                        options={ARRAY_HASHTAG}
                                        component={CustomSelect}
                                        isMulti
                                    />
                                </div>

                                <div className="mb-10">
                                    <RadioGroup
                                        id="disclosure"
                                        label="공개여부"
                                        value={values.disclosure}
                                        error={errors.disclosure}
                                        touched={touched.disclosure}
                                    >
                                        <Field
                                            component={Radio}
                                            name="disclosure"
                                            id={"disclosure0"}
                                            valueSet='false'
                                            label="공개"
                                        />
                                        <Field
                                            component={Radio}
                                            name="disclosure"
                                            id="disclosure1"
                                            valueSet='true'
                                            label="비공개"
                                        />
                                    </RadioGroup>
                                </div>
                                {(values.disclosure === 'true') && (<div className="mb-10">
                                    <Field
                                        label='채팅방 명'
                                        name='password'
                                        type='password'
                                        className='form-control form-custom-input-border'
                                        placeholder='4~8자리의 비밀번호를 입력해주세요.'
                                        component={CustomInput}
                                    />
                                </div>)}

                            </div>
                            <div className='pt-4 text-center pb-11'>
                                <ButtonPrimary text="방 만들기" type="submit" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </DrawerWrapper>
        </>
    )
};

export { DrawerRoom };

