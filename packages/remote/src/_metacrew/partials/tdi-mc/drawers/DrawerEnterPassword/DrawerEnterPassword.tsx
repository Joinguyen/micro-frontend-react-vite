/* eslint-disable jsx-a11y/anchor-is-valid */
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';
import { FC, useState } from 'react';
import { ButtonPrimary } from '../../forms/Buttons/ButtonPrimary/ButtonPrimary';
import { DrawerWrapper } from '../DrawerWrapper/DrawerWrapper';
import './style.scss';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { IPassword } from '../DrawerModel';
import CustomInput from '../../forms/CustomInput/CustomInput';

type Props = {
    isShow?: boolean,
    className?: string,
    handleShow?: (isShow: boolean) => void
}

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, '4~8자리의 비밀번호를 입력해주세요.')
        .max(8, '4~8자리의 비밀번호를 입력해주세요.')
        .required('비밀번호가 필요합니다'),
});

const DrawerEnterPassword: FC<Props> = ({ className, isShow = false, handleShow }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const initialValues = {
        password: ''
    }

    const onSubmit = (values: IPassword) => {
        setLoading(true);
        navigate("/chat/chat-message/chat1");
    };

    const handleClick = () => {
        handleShow && handleShow(false);
    };

    return (
        <>
            <DrawerWrapper handleShow={handleClick} isShow={isShow} title="비밀번호 입력">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ touched, errors }: FormikProps<IPassword>) => (
                        <Form className='form'>
                            <div>
                                <div className="mb-10 mt-20">
                                    <label className='col-form-label p-0 required form-custom-label '>비밀번호</label>
                                    <div>
                                        <Field
                                            name='password'
                                            type='password'
                                            className='form-control form-custom-input-border'
                                            placeholder='4~8자리의 비밀번호를 입력해주세요.'
                                            component={CustomInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='pt-4 text-center pb-11'>
                                <ButtonPrimary text="확인" type="submit" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </DrawerWrapper>
        </>
    )
};

export { DrawerEnterPassword };

