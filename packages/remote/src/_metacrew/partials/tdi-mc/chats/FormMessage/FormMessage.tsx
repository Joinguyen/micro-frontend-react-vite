/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEventHandler, FC, useCallback, useRef, useState } from 'react';
import { MessageModel, toAbsoluteUrl, } from '../../../../helpers';
import './style.scss';
import { useDropzone } from 'react-dropzone';

type Props = {
  isDrawer?: boolean,
  className?: string,
  sendMessage?: (message: MessageModel) => void
}


const FormMessage: FC<Props> = ({ isDrawer = false, className = '', sendMessage }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string>('');
  const [isShowUploadFile, setIsShowUploadFile] = useState<boolean>(false)
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleSendMessage = (messageInput: undefined | string = '') => {
    if (messageInput === '' && message === '') {
      return;
    }
    const newMessage: MessageModel = {
      user: 2,
      type: 'out',
      text: messageInput || message,
      time: 'Just now',
    };
    setMessage('');
    if (messageRef && messageRef.current) {
      messageRef.current.style.height = 'auto';
    };
    sendMessage && sendMessage(newMessage);
    setTimeout(() => {
      const newMessage: MessageModel = {
        user: 4,
        type: 'in',
        text: '그래도 휴일에 일부러 움직이 게 해주니까 그것만으로도 만 족해요.',
        time: 'Just now',
      };
      sendMessage && sendMessage(newMessage);
    }, 1000)
  }

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessage(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  const handleShowUploadFile = () => {
    setIsShowEmoji(false);
    setIsShowUploadFile((prev) => !prev);
  }

  const handleShowEmoji = () => {
    setIsShowUploadFile(false);
    setIsShowEmoji((prev) => !prev);
  }

  const handleRemoveFilePreview = (index: number) => {
    setFiles((prev) => {
      return prev?.filter((item, i) => i !== index);
    });
  };

  return (
    <div
      className={`card-footer ${className}`}
      id='kt_chat_messenger_footer'
      ref={formRef}
    >
      {(files?.length > 0) && (
        <div className="d-flex align-items-center justify-content-start gap-2 my-2 box-preview-images">
          {files.map((file: any, index: number) => (
            <div key={file.name} className="box-preview-image">
              <div className="preview-image" style={{ backgroundImage: `url(${file.preview})` }}>
                <div className="btn-remove-preview-image" onClick={() => handleRemoveFilePreview(index)}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>)}
      <div className='d-flex flex-stack'>
        <button
          className='btn btn-sm btn-icon btn-message-icon'
          type='button'
          data-bs-toggle='tooltip'
          title='Coming soon'
          onClick={handleShowUploadFile}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#BDBDBD" />
            <path d="M8.86215 15.4401L5.2093 22.0582C5.02537 22.3915 5.26642 22.7999 5.64705 22.7999H24.3529C24.7335 22.7999 24.9746 22.3915 24.7906 22.0582L18.3477 10.3851C18.1584 10.0423 17.6664 10.0402 17.4742 10.3814L13.2712 17.847C13.1126 18.1288 12.7321 18.1882 12.4952 17.968L9.64023 15.3155C9.40203 15.0941 9.01928 15.1555 8.86215 15.4401Z" fill="white" />
            <circle cx="9.00003" cy="10.2001" r="1.8" fill="#EBEBEB" />
          </svg>
        </button>
        <div className='box-message-input'>
          <textarea
            ref={messageRef}
            className='form-control  message-input'
            data-kt-element='input'
            rows={1}
            placeholder='메세지 보내기...'
            value={message}
            onChange={handleChange}
            onKeyDown={onEnterPress}
            style={{ height: '50px', overflow: 'hidden' }}
          ></textarea>
          <button
            className='btn btn-sm btn-icon btn-message-emoji'
            type='button'
            data-bs-toggle='tooltip'
            title='Coming soon'
            onClick={handleShowEmoji}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="#AFB8C3" strokeWidth="2" />
              <path d="M13 12C12.6561 13.1502 11.4434 14 10 14C8.55665 14 7.34387 13.1502 7 12" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="6" cy="9" r="1" fill="#BDBDBD" />
              <circle cx="14" cy="9" r="1" fill="#BDBDBD" />
            </svg>
          </button>
        </div>
        <button
          className='btn btn-icon btn-message-send'
          type='button'
          data-kt-element='send'
          onClick={() => handleSendMessage()}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#2F80ED" />
            <path d="M18.063 22.2221L27.8408 12.4443" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.8408 12.4443L22.063 28.4443C22.024 28.5294 21.9614 28.6016 21.8826 28.6521C21.8038 28.7027 21.7122 28.7296 21.6185 28.7296C21.5249 28.7296 21.4333 28.7027 21.3545 28.6521C21.2757 28.6016 21.2131 28.5294 21.1741 28.4443L18.063 22.2221L11.8408 19.111C11.7557 19.072 11.6835 19.0094 11.633 18.9306C11.5824 18.8518 11.5555 18.7602 11.5555 18.6666C11.5555 18.5729 11.5824 18.4813 11.633 18.4025C11.6835 18.3237 11.7557 18.2611 11.8408 18.2221L27.8408 12.4443Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {isShowUploadFile && (<div className="d-flex align-items-center justify-content-center drag-drop-upload-image ">
        <div {...getRootProps()} className='d-flex align-items-center justify-content-center upload-from-gallery me-6'>
          갤러리
          <input {...getInputProps()} />
        </div>
        <div className='d-flex align-items-center justify-content-center upload-from-camera'>
          카메라
        </div>
      </div>)}
      {isShowEmoji && (<div className="d-flex flex-column align-items-center justify-content-center menu-box-emoji ">
        <div className='d-flex align-items-center justify-content-start menu-box-emoji-header'>
          <div className="menu-box-emoji-header-item m-3 item-active">
            <img src={toAbsoluteUrl('/media/emojis/icon1.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon2.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon3.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon2.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon3.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon2.png')} alt='icon' className='p-0' />
          </div>
          <div className="menu-box-emoji-header-item m-3">
            <img src={toAbsoluteUrl('/media/emojis/icon3.png')} alt='icon' className='p-0' />
          </div>
        </div >
        <div className='d-flex flex-wrap align-items-center justify-content-start menu-box-emoji-body'>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/1.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/2.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/3.png')} alt='icon' />`)} className='p-3' />
          </div>
          <div className="menu-box-emoji-body-item">
            <img src={toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='emoji' onClick={() => handleSendMessage(`<img src=${toAbsoluteUrl('/media/emojis/emoji1/4.png')} alt='icon' />`)} className='p-3' />
          </div>
        </div>
      </div>)}
    </div>
  )
}

export { FormMessage };

