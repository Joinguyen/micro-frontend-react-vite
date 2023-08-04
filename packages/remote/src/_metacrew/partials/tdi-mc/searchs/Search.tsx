/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.scss';
type Props = {
  className?: string,
}

const Search: React.FC<Props> = ({ className = '' }) => {
  return (
    <form className={`w-100 position-relative ${className}`} autoComplete='off'>
      <div
        className='fs-2 text-lg-1 text-gray-500 position-absolute top-50 pb-2 translate-middle-y'>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.46667" cy="7.46667" r="6.46667" stroke="#BDBDBD" strokeWidth="2" />
          <path d="M12.8001 12.8L16.0001 16" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <input
        type='text'
        className='form-control form-control-mc-border-bottom ps-9'
        name='search'
        placeholder='Enter your keyword'
      />
    </form>
  )
}

export { Search };

