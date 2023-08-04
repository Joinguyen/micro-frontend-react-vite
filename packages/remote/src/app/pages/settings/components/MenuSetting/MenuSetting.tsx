/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageData } from '../../../../../_metacrew/layout/core/PageData';
import { ThemeModeSwitcher } from '../../../../../_metacrew/partials/layout/theme-mode/ThemeModeSwitcher';
import './style.scss';

const MenuSetting: FC = () => {
  const navigate = useNavigate();
  const { setComponentRight } = usePageData();

  useEffect(() => {
    setComponentRight(null);
    return () => {
      setComponentRight(null);
    }
  }, [setComponentRight]);

  return (
    <div className='d-flex flex-column'>
      <div className="mt-5 mb-5 setting-title">
        설정
      </div>
      <div className='flex-column w-100'>

        <div className='card-body pt-0' id='kt_chat_private_body'>
          <div
            className='scroll-y me-n5 pe-5 hidden-scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_private_header'
            data-kt-scroll-wrappers='#kt_content, #kt_chat_private_body'
            data-kt-scroll-offset='0px'
          >
            <Link to='/setting/info'>
              <div className='d-flex align-items-center justify-content-between px-5 py-3 setting-item'>
                <div className=' d-flex align-items-center  setting-item-icon'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_547_130)">
                      <path d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" stroke="#FF2EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.9 15C19.7669 15.3016 19.7272 15.6362 19.786 15.9606C19.8448 16.285 19.9995 16.5843 20.23 16.82L20.29 16.88C20.476 17.0657 20.6235 17.2863 20.7241 17.5291C20.8248 17.7719 20.8766 18.0322 20.8766 18.295C20.8766 18.5578 20.8248 18.8181 20.7241 19.0609C20.6235 19.3037 20.476 19.5243 20.29 19.71C20.1043 19.896 19.8837 20.0435 19.6409 20.1441C19.3981 20.2448 19.1378 20.2966 18.875 20.2966C18.6122 20.2966 18.3519 20.2448 18.1091 20.1441C17.8663 20.0435 17.6457 19.896 17.46 19.71L17.4 19.65C17.1643 19.4195 16.865 19.2648 16.5406 19.206C16.2162 19.1472 15.8816 19.1869 15.58 19.32C15.2842 19.4468 15.032 19.6572 14.8543 19.9255C14.6766 20.1938 14.5813 20.5082 14.58 20.83V21C14.58 21.5304 14.3693 22.0391 13.9942 22.4142C13.6191 22.7893 13.1104 23 12.58 23C12.0496 23 11.5409 22.7893 11.1658 22.4142C10.7907 22.0391 10.58 21.5304 10.58 21V20.91C10.5723 20.579 10.4651 20.258 10.2725 19.9887C10.0799 19.7194 9.81074 19.5143 9.5 19.4C9.19838 19.2669 8.86381 19.2272 8.53941 19.286C8.21502 19.3448 7.91568 19.4995 7.68 19.73L7.62 19.79C7.43425 19.976 7.21368 20.1235 6.97088 20.2241C6.72808 20.3248 6.46783 20.3766 6.205 20.3766C5.94217 20.3766 5.68192 20.3248 5.43912 20.2241C5.19632 20.1235 4.97575 19.976 4.79 19.79C4.60405 19.6043 4.45653 19.3837 4.35588 19.1409C4.25523 18.8981 4.20343 18.6378 4.20343 18.375C4.20343 18.1122 4.25523 17.8519 4.35588 17.6091C4.45653 17.3663 4.60405 17.1457 4.79 16.96L4.85 16.9C5.08054 16.6643 5.23519 16.365 5.294 16.0406C5.35282 15.7162 5.31312 15.3816 5.18 15.08C5.05324 14.7842 4.84276 14.532 4.57447 14.3543C4.30618 14.1766 3.99179 14.0813 3.67 14.08H3.5C2.96957 14.08 2.46086 13.8693 2.08579 13.4942C1.71071 13.1191 1.5 12.6104 1.5 12.08C1.5 11.5496 1.71071 11.0409 2.08579 10.6658C2.46086 10.2907 2.96957 10.08 3.5 10.08H3.59C3.92099 10.0723 4.242 9.96512 4.5113 9.77251C4.78059 9.5799 4.98572 9.31074 5.1 9C5.23312 8.69838 5.27282 8.36381 5.214 8.03941C5.15519 7.71502 5.00054 7.41568 4.77 7.18L4.71 7.12C4.52405 6.93425 4.37653 6.71368 4.27588 6.47088C4.17523 6.22808 4.12343 5.96783 4.12343 5.705C4.12343 5.44217 4.17523 5.18192 4.27588 4.93912C4.37653 4.69632 4.52405 4.47575 4.71 4.29C4.89575 4.10405 5.11632 3.95653 5.35912 3.85588C5.60192 3.75523 5.86217 3.70343 6.125 3.70343C6.38783 3.70343 6.64808 3.75523 6.89088 3.85588C7.13368 3.95653 7.35425 4.10405 7.54 4.29L7.6 4.35C7.83568 4.58054 8.13502 4.73519 8.45941 4.794C8.78381 4.85282 9.11838 4.81312 9.42 4.68H9.5C9.79577 4.55324 10.048 4.34276 10.2257 4.07447C10.4034 3.80618 10.4987 3.49179 10.5 3.17V3C10.5 2.46957 10.7107 1.96086 11.0858 1.58579C11.4609 1.21071 11.9696 1 12.5 1C13.0304 1 13.5391 1.21071 13.9142 1.58579C14.2893 1.96086 14.5 2.46957 14.5 3V3.09C14.5013 3.41179 14.5966 3.72618 14.7743 3.99447C14.952 4.26276 15.2042 4.47324 15.5 4.6C15.8016 4.73312 16.1362 4.77282 16.4606 4.714C16.785 4.65519 17.0843 4.50054 17.32 4.27L17.38 4.21C17.5657 4.02405 17.7863 3.87653 18.0291 3.77588C18.2719 3.67523 18.5322 3.62343 18.795 3.62343C19.0578 3.62343 19.3181 3.67523 19.5609 3.77588C19.8037 3.87653 20.0243 4.02405 20.21 4.21C20.396 4.39575 20.5435 4.61632 20.6441 4.85912C20.7448 5.10192 20.7966 5.36217 20.7966 5.625C20.7966 5.88783 20.7448 6.14808 20.6441 6.39088C20.5435 6.63368 20.396 6.85425 20.21 7.04L20.15 7.1C19.9195 7.33568 19.7648 7.63502 19.706 7.95941C19.6472 8.28381 19.6869 8.61838 19.82 8.92V9C19.9468 9.29577 20.1572 9.54802 20.4255 9.72569C20.6938 9.90337 21.0082 9.99872 21.33 10H21.5C22.0304 10 22.5391 10.2107 22.9142 10.5858C23.2893 10.9609 23.5 11.4696 23.5 12C23.5 12.5304 23.2893 13.0391 22.9142 13.4142C22.5391 13.7893 22.0304 14 21.5 14H21.41C21.0882 14.0013 20.7738 14.0966 20.5055 14.2743C20.2372 14.452 20.0268 14.7042 19.9 15Z" stroke="#FF2EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_547_130">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='ms-4 setting-item-text'> 일반</span>
                </div>
                <div className='setting-item-icon-next'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18L15.5 12L9.5 6" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
            <div className='separator separator-line separator-color my-6'></div>
            <div className='d-flex align-items-center justify-content-between px-5 py-3 setting-item'>
              <div className=' d-flex align-items-center  setting-item-icon'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 8C18.5 6.4087 17.8679 4.88258 16.7426 3.75736C15.6174 2.63214 14.0913 2 12.5 2C10.9087 2 9.38258 2.63214 8.25736 3.75736C7.13214 4.88258 6.5 6.4087 6.5 8C6.5 15 3.5 17 3.5 17H21.5C21.5 17 18.5 15 18.5 8Z" stroke="#FF2EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.23 21C14.0542 21.3031 13.8018 21.5547 13.4982 21.7295C13.1946 21.9044 12.8504 21.9965 12.5 21.9965C12.1496 21.9965 11.8054 21.9044 11.5018 21.7295C11.1982 21.5547 10.9458 21.3031 10.77 21" stroke="#FF2EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='ms-4 setting-item-text'> 알림</span>
              </div>
              <div className='setting-item-icon-next'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 18L15.5 12L9.5 6" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className='separator separator-line separator-color my-6'></div>
            <div className='d-flex align-items-center justify-content-between px-5 py-3 setting-item'>
              <div className=' d-flex align-items-center  setting-item-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41101 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99271 10.5121 3.57345 8.9043C4.1542 7.29651 5.18082 5.88737 6.53321 4.84175C7.88559 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85852 7.68141C9.98321 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9905 14.2662 19.6517 13.7866 21 12.79Z" stroke="#FF2EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='ms-4 setting-item-text'> 다크모드</span>
              </div>
              <div className='setting-item-icon-next'>
                <ThemeModeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export { MenuSetting };

