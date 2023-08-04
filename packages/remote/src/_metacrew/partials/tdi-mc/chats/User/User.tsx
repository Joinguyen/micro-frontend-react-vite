/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import React, { RefCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { toAbsoluteUrl } from '../../../../helpers';
import { Checkbox } from '../../forms/Checkbox/Checkbox';
import './style.scss';


type Props = {
  className?: string,
  isSeparator?: boolean,
  isShowCheck?: boolean,
  isShowTime?: boolean,
  isShowBadge?: boolean,
  isChecked?: boolean,
  hasActionDelete?: boolean,
}

const User: React.FC<Props> = ({ className, isSeparator = false, isShowCheck = false, isShowTime = false, isShowBadge = false, isChecked = false, hasActionDelete = false }) => {

  const [isShowDelete, setIsShowDelete] = useState<boolean>(false);
  // setup ref for your usage
  const myRef = React.useRef();

  const onSwipedLeft = (event: any) => {
    setIsShowDelete(true);
  }
  const onSwipedRight = (event: any) => {
    setIsShowDelete(false);
  }
  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    onSwiping: ({ event }: any) => {
      event.stopPropagation();
      // console.log('onSwiping', event?.changedTouches[0])
    },
  }) as { ref: RefCallback<Document> };

  const refPassthrough = (el: any) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);
    // set myRef el so you can access it yourself
    myRef.current = el;
  }

  useEffect(() => {
    // Clean up swipeable event listeners
    return () => handlers.ref(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='d-flex flex-stack box-warper-user' {...handlers} ref={refPassthrough}>
        <div className={clsx('d-flex flex-stack box-inner-user', { 'show-delete': (isShowDelete && hasActionDelete) })}>
          <div className={clsx('d-flex flex-stack app-container box-info-user', { 'box-info-user-full-width':!hasActionDelete})}>
            <Link to='/chat/chat-message/chat1'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-mc-52 symbol-circle'>
                  {/* <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>
                    M
                  </span> */}
                  <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
                </div>

                <div className='ms-5'>
                  <button className='btn w-auto h-auto btn-icon text-name text-hover-primary'>
                    100일 걷기 프로젝트
                  </button>
                  <div className='text-sub'>어떤 일이신가요?ㅎ</div>
                </div>
              </div>
            </Link>
            <div className='d-flex flex-column align-items-end h-100 justify-content-between ms-2'>
              {isShowTime && <div className='text-sub'>01:35</div>}
              {isShowBadge && <span className='badge badge-circle badge-mc-theme badge-mc-20 text-badge text-white fs-mc-15 fw-mc-400'>6</span>}
              {isShowCheck && <Checkbox />}
            </div>
          </div>
          {hasActionDelete && (<div className="btn-swipe-able-delete">
            나가기
          </div>)}
        </div>
      </div>
      <div className={clsx("separator separator-line", { 'separator-color': isSeparator })}></div>
    </>
  )
}

export { User };

