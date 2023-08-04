import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../../helpers';
import './style.scss';

type Props = {
  className?: string,
  isLock?: boolean,
  handleShowEnterPassword?: (isShow: boolean) => void
}

const GroupTag: React.FC<Props> = ({ className = '', handleShowEnterPassword, isLock = true }) => {
  const handleClick = () => {
    (isLock && handleShowEnterPassword) && handleShowEnterPassword(true);
  }
  return (
    <div className={className}>
      <div className="d-flex align-items-center justify-content-between box-group-tag" style={{ backgroundImage: `url(${toAbsoluteUrl('/media/groups/1.png')})` }}>
        <div className="d-flex flex-column align-items-start justify-content-between">
          <div className="title-top-group-tag">제한 인원 21</div>
          <Link
            to='/chat/chat-message/chat1'
            className="title-middle-group-tag">
            디자이너들을 위한 방
          </Link>
          <div className="title-bottom-group-tag">#디자인 #기획</div>
        </div>
        <button className='btn btn-icon btn-clock-group-tag' type='button' onClick={handleClick}>
          {isLock ? (<svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.68421" cy="13.3158" r="5.68421" fill="#FF2EAB" />
            <path d="M2.8421 13.3158V4.07895C2.8421 3.39474 3.41052 1 5.68421 1C7.95789 1 8.52631 3.39474 8.52631 4.07895V13.3158" stroke="#FF2EAB" strokeWidth="2" />
            <circle cx="5.68421" cy="12.3684" r="1.89474" fill="white" />
            <rect x="4.73685" y="12.3684" width="1.89474" height="3.78947" fill="white" />
          </svg>) :
            (<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13.3158V4.07895C3 3.39474 3.56842 1 5.84211 1C8.11579 1 8.68421 3.39474 8.68421 4.07895V5" stroke="#A0A0A0" strokeWidth="2" />
              <rect y="8" width="11" height="10" fill="#A0A0A0" />
              <circle cx="5.68417" cy="12.3684" r="1.89474" fill="white" />
              <rect x="4.73682" y="12.3684" width="1.89474" height="3.78947" fill="white" />
            </svg>)}
        </button>
      </div>
    </div>
  )
}

export { GroupTag };

