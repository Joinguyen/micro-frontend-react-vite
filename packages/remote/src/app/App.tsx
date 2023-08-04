import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_metacrew/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metacrew/layout/core'
import { MasterInit } from '../_metacrew/layout/MasterInit'
import { AuthInit } from './pages/auth'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }
