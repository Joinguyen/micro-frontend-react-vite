/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useRef, useState } from 'react'
import {
  MessageModel,
  defaultMessages
} from '../../../../helpers'
import { FormMessage } from '../FormMessage/FormMessage'
import { Message } from '../Message/Message'
import './style.scss'
import { useParams } from 'react-router-dom'
type Props = {
  isDrawer?: boolean
}

const bufferMessages = defaultMessages

const ChatInner: FC<Props> = ({ isDrawer = false }) => {
  let { id } = useParams();
  const [messages, setMessages] = useState<MessageModel[]>(id === 'chatGroup' ? bufferMessages : []);
  const divRef: any = useRef(null);

  const sendMessage = (message: MessageModel) => {
    setMessages((prev) => ([...prev, message]));
  }
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);
  return (
    <div
      className='card-body'
      id='kt_chat_messenger_body_chat_inner'
    >
      <div
        className='scroll-y h-auto me-n5 pe-5 hidden-scroll'
        data-kt-element='messages'
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-max-height='auto'
        data-kt-scroll-dependencies='#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header_chat_inner, #kt_chat_messenger_footer'
        data-kt-scroll-wrappers='#kt_content, #kt_app_content, #kt_chat_messenger_body_chat_inner'
        data-kt-scroll-offset='5px'
      >
        {messages.map((message, index) => <Message key={index} hasAfter={message?.user === messages[index + 1]?.user} hasPrev={message?.user === messages[index - 1]?.user} message={message} />)}
        <div ref={divRef}></div>
      </div>

      <FormMessage className="form-message" sendMessage={sendMessage} />
    </div>
  )
}

export { ChatInner }

