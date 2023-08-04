import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavigationWrapper } from './components/header'
import { Content } from './components/content'
import { ThemeModeProvider, } from '../partials'
import { PageDataProvider } from './core'
import { reInitMenu } from '../helpers'
import { DrawerRoom } from '../partials/tdi-mc'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
          <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
            <NavigationWrapper />
            <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
              <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
                <div className='d-flex flex-column flex-column-fluid'>
                  <Content>
                    <Outlet />
                  </Content>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* begin:: Drawers */}

        {/* end:: Drawers */}
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

export { MasterLayout }
