import { FC, useEffect } from 'react';
import { usePageData } from '../../../../../../_metacrew/layout/core/PageData';
import { InputLine } from '../../../../../../_metacrew/partials/tdi-mc';
import './style.scss';

const ChatRoomName: FC = () => {
  const { setComponentRight } = usePageData();
  useEffect(() => {
    setComponentRight(<ComponentRight />);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);
  return (
    <div className='d-flex flex-column'>
      <div className='flex-column w-100 mb-10 mb-lg-0'>
        <div className='card-header px-4 mb-5 mt-5' id='kt_chat_contacts_header'>
          <InputLine />
        </div>
      </div>
    </div >
  )
}
const ComponentRight: FC = () => {
  return (
    <button
      className='btn btn-sm btn-icon w-auto h-auto btn-title-check'
      type='button'
      disabled
    >
      확인
    </button>);
}
export { ChatRoomName };

