/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageData } from '../../../../../../_metacrew/layout/core/PageData';
import { DrawerEnterPassword, DrawerFilterRoom, GroupTag } from '../../../../../../_metacrew/partials/tdi-mc';
import './style.scss';

const ListRoom: FC = () => {
  const navigate = useNavigate();
  const { isActionRight, setIsActionRight, setComponentRight } = usePageData();
  const [isShowEnterPassword, setIsShowEnterPassword] = useState<boolean>(false);

  const handleChange = (value: string) => {
    navigate("/chat/chat-message");
  };

  const handleShow = (_value: boolean) => {
    setIsActionRight(false);
  };
  const handleShowEnterPassword = (_value: boolean) => {
    setIsShowEnterPassword(_value);
  };

  useEffect(() => {
    setComponentRight(<ComponentRight />);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);
  return (
    <div className='d-flex flex-column'>
      <div className='flex-column w-100'>
        <div className='card-body pt-0' id='kt_chat_messenger_body_list_group_chat'>
          <div
            className='scroll-y me-n5 pe-5 pt-3 h-auto hidden-scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_body_group_chat_header'
            data-kt-scroll-wrappers='#kt_content, #kt_chat_messenger_list_body_group_chat'
            data-kt-scroll-offset='0px'
          >
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
          </div>
        </div>
      </div>
      <DrawerFilterRoom isShow={isActionRight} handleShow={handleShow} />
      <DrawerEnterPassword isShow={isShowEnterPassword} handleShow={handleShowEnterPassword} />
    </div >
  )
}

const ComponentRight: FC = () => {
  const { setIsActionRight } = usePageData();
  const handleClick = () => {
    setIsActionRight(true);
  };
  return (
    <button
      className='btn btn-sm btn-icon w-auto'
      type='button'
      onClick={handleClick}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2.5C1.64 2.5 9.26667 2.5 13 2.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 1V4" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1 11.5C1.64 11.5 9.26667 11.5 13 11.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 10V13" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1 7C1.64 7 9.26667 7 13 7" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 5.5V8.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

    </button>);
}
export { ListRoom };

