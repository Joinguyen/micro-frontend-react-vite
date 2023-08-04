import { FC, useEffect } from 'react';
import { usePageData } from '../../../../../../_metacrew/layout/core/PageData';
import { ButtonPrimary, User } from '../../../../../../_metacrew/partials/tdi-mc';
import { RoomName } from '../../../../../../_metacrew/partials/tdi-mc/infos/RoomName/RoomName';
import './style.scss';

const LeaveChatRoom: FC = () => {
  const { setComponentRight, setPageTitle } = usePageData();
  useEffect(() => {
    setComponentRight(null);
    setPageTitle('');
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight, setPageTitle]);
  return (
    <div className='d-flex flex-column position-relative' id="screen_wrapper">
      <div className='card-body ' id='kt_chat_messenger_body_leave_room'>
        <div className='card-header mt-5' id='kt_chat_contacts_header_leave_room'>
          <RoomName />
          <div className='title-list'>대화상대</div>
        </div>
        <div
          className='scroll-y h-auto me-n5 pe-5 hidden-scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header_leave_room'
          data-kt-scroll-wrappers='#kt_chat_messenger_body_leave_room'
          data-kt-scroll-offset='0px'
        >
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
          <User isSeparator={true} />
        </div>
      </div>
      <div className='box-btn-leave-room'>
        <ButtonPrimary text="채팅방 나가기" />
      </div>
    </div >
  )
}

export { LeaveChatRoom };

