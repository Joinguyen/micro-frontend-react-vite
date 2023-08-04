import React from 'react';
import { toAbsoluteUrl } from '../../../../helpers';
import './style.scss';
import { Link } from 'react-router-dom';

type Props = {
  className?: string,
  handleShow?: (isShow: boolean) => void
}

const Account: React.FC<Props> = ({ className, handleShow }) => {

  const handleClick = () => {
    handleShow && handleShow(true);
  };

  return (
    <div className="d-flex w-100 align-items-center justify-content-between box-account">
      <div className='d-flex align-items-center justify-content-between'>
        <Link to="/setting/menu">
          <div className='symbol symbol-mc-52 symbol-circle'>
            {/* <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>
            M
          </span> */}
            <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
          </div>
        </Link>
        <div className='ms-5'>
          <div className='name-account'>
            레미파
          </div>
          <div className='sub-account'>remipa_v</div>
        </div>

      </div>
      <div className="d-flex align-items-center justify-content-between">

        <div className="btn-account">
          방 만들기
          <button
            className='btn btn-icon ms-3 btn-next-account'
            type='button'
            onClick={handleClick}
          >
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 5.5L0.999999 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export { Account };
