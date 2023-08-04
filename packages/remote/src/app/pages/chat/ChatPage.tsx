import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metacrew/layout/core'
import { ChatMessage } from './components/ChatMessage/ChatMessage'
import { NewChat } from './components/NewChat/NewChat'
import { ListRoom } from './components/Rooms/ListRoom/ListRoom'
import { Room } from './components/Rooms/Room/Room'
import { ChatRoomName } from './components/Settings/ChatRoomName/ChatRoomName'
import { LeaveChatRoom } from './components/Settings/LeaveChatRoom/LeaveChatRoom'
import { UserList } from './components/UserList/UserList'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Chat',
    path: '/chat/user-list',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ChatPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='user-list'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>채팅</PageTitle>
              <UserList />
            </>
          }
        />
        <Route
          path='chat-message/:id'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>100일 걷기 프로젝트</PageTitle>
              <ChatMessage />
            </>
          }
        />
        <Route
          path='chat-message/:id/leave'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}></PageTitle>
              <LeaveChatRoom />
            </>
          }
        />
        <Route
          path='chat-message/:id/change'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>채팅방 이름</PageTitle>
              <ChatRoomName />
            </>
          }
        />
        <Route
          path='new-chat'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>새 메세지</PageTitle>
              <NewChat />
            </>
          }
        />
        <Route
          path='room'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>채팅</PageTitle>
              <Room />
            </>
          }
        />
        <Route
          path='list-room'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>참여가능 멀티 채팅</PageTitle>
              <ListRoom />
            </>
          }
        />
        <Route index element={<Navigate to='/chat/user-list' />} />
      </Route>
    </Routes>
  )
}

export default ChatPage
