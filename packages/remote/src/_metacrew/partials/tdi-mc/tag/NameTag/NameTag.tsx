import React from 'react';
import './style.scss';

type Props = {
  className?: string,
  name?: string
}

const NameTag: React.FC<Props> = ({ className = '', name = '' }) => {
  return (
    <div className={className}>
      <div className="d-flex align-items-center justify-content-between box-name-tag">
        <button className="btn btn-icon h-auto text-name-tag">{name}</button>
        <button className='btn btn-icon h-auto w-auto btn-name-tag' type='button'>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9" stroke="#FF9DD8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 9L1 1" stroke="#FF9DD8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export { NameTag };

