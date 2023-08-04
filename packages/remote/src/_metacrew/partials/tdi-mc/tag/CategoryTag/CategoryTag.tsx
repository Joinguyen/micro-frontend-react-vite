import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type Props = {
  className?: string,
}

const CategoryTag: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={className}>
      <div className="d-flex align-items-center justify-content-between box-category-tag">
        <Link
          to='/chat/chat-message/chat1/change'>
          <button
            className='btn btn-icon btn-category-tag'
            type='button'
          >
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5556" cy="6.33333" r="6.33333" fill="#FF0000" fillOpacity="0.5" />
              <circle cx="6.33333" cy="12.6666" r="6.33333" fill="#33FF00" fillOpacity="0.5" />
              <circle cx="14.7778" cy="12.6666" r="6.33333" fill="#00B3FF" fillOpacity="0.5" />
            </svg>
          </button>
        </Link>
        <button className='btn btn-icon h-auto text-category-tag' type='button'>
          디자인
        </button>
      </div>
    </div>
  )
}

export { CategoryTag };

