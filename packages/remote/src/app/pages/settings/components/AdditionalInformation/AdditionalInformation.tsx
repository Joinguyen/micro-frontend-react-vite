/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageData } from '../../../../../_metacrew/layout/core/PageData';
import { ButtonPrimary } from '../../../../../_metacrew/partials/tdi-mc';
import './style.scss';

const AdditionalInformation: FC = () => {
  const navigate = useNavigate();
  const { setComponentRight } = usePageData();
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

  useEffect(() => {
    setComponentRight(null);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);

  return (
    <div className='d-flex flex-column'>
      <div className='flex-column w-100'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div>
            <div className="mb-10 mt-10">
              <label className='col-form-label p-0 required form-custom-label '>E-mail</label>
              <div>
                <input
                  type='text'
                  className='form-control form-custom-input-border'
                  placeholder='E-mail 주소를 입력해주세요.'
                />
              </div>
            </div>
            <div className="mb-10 mt-10">
              <label className='col-form-label p-0 required form-custom-label '>항목 1</label>
              <div>
                <input
                  type='text'
                  className='form-control form-custom-input-border'
                  placeholder='E-mail 주소를 입력해주세요.'
                />
              </div>
            </div>
            <div className="mb-10 mt-10">
              <label className='col-form-label p-0 required form-custom-label '>항목 2</label>
              <div>
                <input
                  type='text'
                  className='form-control form-custom-input-border'
                  placeholder='E-mail 주소를 입력해주세요.'
                />
              </div>
            </div>
          </div>
          <div className='pt-4 text-center pb-11'>
            <ButtonPrimary text="확인" />
          </div>
        </form>
      </div>
    </div >
  )
}

export { AdditionalInformation };

