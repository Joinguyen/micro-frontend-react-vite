import { FC, useEffect } from 'react';
import { usePageData } from '../../../../../_metacrew/layout/core/PageData';
import { ButtonPrimary, SearchTag, User } from '../../../../../_metacrew/partials/tdi-mc';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const NewChat: FC = () => {
  const { setComponentRight } = usePageData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat/chat-message/chat1");
  };

  useEffect(() => {
    setComponentRight(null);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);
  return (
    <div className='d-flex flex-column position-relative' id="screen_wrapper">
      <div className='card-body ' id='kt_chat_messenger_body_new_chat'>
        <div className='card-header mt-5' id='kt_chat_contacts_header_new_chat'>
          <SearchTag className="px-6" />
          <div className='title-list-new-chat'>추천</div>
        </div>
        <div
          className='scroll-y h-auto me-n5 pe-5 hidden-scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header_new_chat'
          data-kt-scroll-wrappers='#kt_chat_messenger_body_new_chat'
          data-kt-scroll-offset='0px'
        >
          <User isSeparator={true} isShowCheck={true} isChecked={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
          <User isSeparator={true} isShowCheck={true} />
        </div>
      </div>
      <div className='box-btn-new-chat'>
        <ButtonPrimary text="채팅 만들기" type="button" onClick={handleClick} />
      </div>
    </div >
  )
}
export { NewChat };

