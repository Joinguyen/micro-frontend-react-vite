/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { FC, useState } from 'react';
import {
  MessageModel,
  UserInfoModel,
  defaultUserInfos,
  toAbsoluteUrl
} from '../../../../helpers';
import './style.scss';

type Props = {
  message: MessageModel,
  isDrawer?: boolean,
  hasAfter: boolean,
  hasPrev: boolean,
};

const Message: FC<Props> = ({ message, isDrawer = false, hasAfter = false, hasPrev = false }) => {
  const [userInfos] = useState<UserInfoModel[]>(defaultUserInfos)
  const { user, type, template, time, text } = message;
  const userInfo = userInfos[user]
  const state = type === 'in' ? 'info' : 'primary'

  const contentClass = `d-flex justify-content-${type === 'in' ? 'start' : 'end'} margin-${type === 'in' ? 'right' : 'left'}-40`
  return (
    <div
      className={clsx('box-message d-flex', contentClass)}
    >
      <div
        className={`d-flex align-items align-items-end flex-${type === 'in' ? 'row' : 'row-reverse'}`}
      >
        <div className={clsx('symbol  symbol-40px symbol-circle avatar-message', { 'align-self-center': !hasPrev })} >
          {!hasAfter && (<img alt='Pic' src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} />)}
        </div>
        <div
          className={clsx(
            'text-message',
            `text-${type === 'in' ? 'start' : 'end'}`,
            `message-${type === 'in' ? 'start' : 'end'}`
          )}
          data-kt-element='message-text'
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className='ms-3'>
          {!hasAfter && (<span className='time-message mb-1'>{'01:35' || time}</span>)}
        </div>
      </div>
    </div>
  )
}

export { Message };

