/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageData } from '../../../../../../_metacrew/layout/core/PageData';
import { Account, CategoryTag, DrawerEnterPassword, DrawerRoom, GroupTag, Search, Tab } from '../../../../../../_metacrew/partials/tdi-mc';
import './style.scss';

const Room: FC = () => {
  const navigate = useNavigate();
  const { setComponentRight } = usePageData();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowEnterPassword, setIsShowEnterPassword] = useState<boolean>(false);

  const handleChange = (value: string) => {
    navigate("/chat/user-list");
  };

  const handleShow = (_value: boolean) => {
    setIsShow((prev) => !prev)
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
    <div className='d-flex flex-column bg-screen-group'>
      <div className='mt-5 mb-10'>
        <Tab value="radio-2" handleChange={handleChange} />
      </div>
      <div className='flex-column w-100'>
        <div className='card-header mt-0 position-relative' id='kt_chat_messenger_body_group_chat_header'>
          <Account handleShow={handleShow} />
          <div className='px-6 mb-0'>
            <Search className="box-search-group" />
            <div className='w-100 d-flex align-items-center justify-content-between'>
              <div
                className='title-multi-chat'
              >
                멀티 채팅
              </div>
              <Link to="/chat/list-room">
                <button
                  className='btn btn-icon btn-view-all w-auto h-auto'
                  type='button'
                >
                  전체보기
                </button>
              </Link>
            </div>
          </div>
          <div className='box-list-category-tag-tmp'></div>
          <div className='d-flex align-items-center justify-content-between box-list-category-tag hidden-scroll'>
            <CategoryTag className="me-3" />
            <CategoryTag className="me-3" />
            <CategoryTag className="me-3" />
            <CategoryTag className="me-3" />
            <CategoryTag className="me-3" />
            <CategoryTag className="me-3" />
          </div>
        </div>
        <div className='card-body pt-0' id='kt_chat_messenger_body_group_chat'>
          <div
            className='scroll-y me-n5 pe-5 h-auto hidden-scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_body_group_chat_header'
            data-kt-scroll-wrappers='#kt_content, #kt_chat_messenger_body_group_chat'
            data-kt-scroll-offset='0px'
          >
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
            <GroupTag className="mb-7" handleShowEnterPassword={handleShowEnterPassword} />
          </div>
        </div>
      </div>
      <DrawerRoom isShow={isShow} handleShow={handleShow} />
      <DrawerEnterPassword isShow={isShowEnterPassword} handleShow={handleShowEnterPassword} />
    </div >
  )
}

const ComponentRight: FC = () => {
  return (
    <Link to='/setting/menu'>
      <button
        className='btn btn-sm btn-icon w-auto'
        type='button'
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8817 2.48725C12.0394 2.32951 12.0394 2.07375 11.8817 1.91601L10.084 0.118308C9.92625 -0.039436 9.67049 -0.0394362 9.51275 0.118308L7.71505 1.91601C7.55731 2.07375 7.55731 2.32951 7.71505 2.48725L9.51275 4.28495C9.67049 4.44269 9.92625 4.44269 10.084 4.28495L11.8817 2.48725Z" fill="#111111" />
          <path d="M8.72332 5.64583C8.88107 5.48808 8.88107 5.23233 8.72333 5.07458L6.92563 3.27688C6.76788 3.11914 6.51213 3.11914 6.35438 3.27688L0.418033 9.21323C0.356233 9.27503 0.316145 9.35521 0.303785 9.44173L0.00416767 11.539C-0.0339152 11.8056 0.194581 12.0341 0.461162 11.996L2.55848 11.6964C2.645 11.6841 2.72518 11.644 2.78698 11.5822L8.72332 5.64583Z" fill="#111111" />
        </svg>
      </button></Link>);
}
export { Room };
