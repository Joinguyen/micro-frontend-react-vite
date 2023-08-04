/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePageData } from '../../../../../_metacrew/layout/core/PageData';
import { ChatInner } from '../../../../../_metacrew/partials/tdi-mc';

const ChatMessage: FC = () => {
  const { setComponentRight } = usePageData();
  useEffect(() => {
    setComponentRight(<ComponentRight />);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);
  return (
    <div className='d-flex flex-column'>
      <div className='flex-column w-100'>
        <div id='kt_chat_messenger'>
          <ChatInner />
        </div>
      </div>
    </div >
  )
}
const ComponentRight: FC = () => {
  return (
    <>
      <button
        className='btn btn-sm btn-icon h-auto me-2'
        type='button'
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5.6" cy="5.6" r="4.6" stroke="#111111" strokeWidth="2" />
          <path d="M9.59999 9.59985L12 11.9999" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <Link to='/chat/chat-message/chat1/leave'>
        <button
          className='btn btn-icon w-auto h-auto'
          type='button'
        >
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H13" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 6H13" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 11H13" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </Link>
    </>);
}
export { ChatMessage };

