/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { ButtonPrimary } from '../../forms/Buttons/ButtonPrimary/ButtonPrimary';
import { Checkbox } from '../../forms/Checkbox/Checkbox';
import { DrawerWrapper } from '../DrawerWrapper/DrawerWrapper';
import './style.scss';

type Props = {
    isShow?: boolean,
    className?: string,
    handleShow?: (isShow: boolean) => void
}

const DrawerFilterRoom: FC<Props> = ({ className, isShow = false, handleShow }) => {
    const [loading, setLoading] = useState(false);
    const initialValues = {}
    const profileDetailsSchema = {};
    const formik = useFormik<any>({
        initialValues,
        validationSchema: profileDetailsSchema,
        onSubmit: (values) => {
            setLoading(true)
            // code submit
        },
    });

    const handleClick = () => {
        handleShow && handleShow(false);
    };
    return (
        <>
            <DrawerWrapper handleShow={handleClick} isShow={isShow} title="필터">
                <form onSubmit={formik.handleSubmit} noValidate className='form'>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>디자인</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>개발</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>생활</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>미용</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>디자인</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>아이템</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                            <label className='col-form-label p-0  form-custom-label mb-0'>명품</label>
                            <div>
                                <Checkbox className="form-check-custom-bg" />
                            </div>
                        </div>
                        <div className="separator separator-line separator-color"></div>
                    </div>
                    <div className='pt-4 text-center pb-11'>
                        <ButtonPrimary text="설정완료" />
                    </div>
                </form>
            </DrawerWrapper>
        </>
    )
};

export { DrawerFilterRoom };

