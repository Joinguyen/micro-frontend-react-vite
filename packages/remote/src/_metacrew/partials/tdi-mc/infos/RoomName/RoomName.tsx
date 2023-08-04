import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type Props = {
  className?: string,
}

const RoomName: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <div className="d-flex room-name-top">
        100일 걷기 프로젝트
        <Link
          to='/chat/chat-message/chat1/change'>
          <button
            className='btn btn-sm btn-icon h-auto'
            type='button'
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8817 2.48725C12.0394 2.32951 12.0394 2.07375 11.8817 1.91601L10.084 0.118308C9.92625 -0.039436 9.67049 -0.0394362 9.51275 0.118308L7.71505 1.91601C7.55731 2.07375 7.55731 2.32951 7.71505 2.48725L9.51275 4.28495C9.67049 4.44269 9.92625 4.44269 10.084 4.28495L11.8817 2.48725Z" fill="#111111" />
              <path d="M8.72332 5.64583C8.88107 5.48808 8.88107 5.23233 8.72332 5.07458L6.92563 3.27688C6.76788 3.11914 6.51213 3.11914 6.35438 3.27688L0.418033 9.21323C0.356233 9.27503 0.316145 9.35521 0.303785 9.44173L0.00416767 11.539C-0.0339152 11.8056 0.194581 12.0341 0.461161 11.996L2.55848 11.6964C2.645 11.6841 2.72518 11.644 2.78698 11.5822L8.72332 5.64583Z" fill="#111111" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="room-name-bottom">
        21명 참여중
      </div>
    </div>
  )
}

export { RoomName };

