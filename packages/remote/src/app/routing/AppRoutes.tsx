import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { AuthPage, Logout } from '../pages/auth'
import { ErrorsPage } from '../pages/errors/ErrorsPage'
import { PrivateRoutes } from './PrivateRoutes'

const REACT_APP_PUBLIC_URL  = import.meta.env.REACT_APP_PUBLIC_URL || '';

const AppRoutes: FC = () => {
  const { currentUser = true } = {}; //useAuth()
  return (
    <BrowserRouter basename={REACT_APP_PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/chat' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }

