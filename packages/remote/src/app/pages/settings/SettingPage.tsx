import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metacrew/layout/core'
import { MenuSetting } from './components/MenuSetting/MenuSetting'
import { AdditionalInformation } from './components/AdditionalInformation/AdditionalInformation'

const settingBreadCrumbs: Array<PageLink> = [
  {
    title: 'Setting',
    path: '/setting',
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

const SettingPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='menu'
          element={
            <>
              <PageTitle breadcrumbs={settingBreadCrumbs}>설정</PageTitle>
              <MenuSetting />
            </>
          }
        />
        <Route
          path='info'
          element={
            <>
              <PageTitle breadcrumbs={settingBreadCrumbs}>추가 정보 입력</PageTitle>
              <AdditionalInformation />
            </>
          }
        />

        <Route index element={<Navigate to='/setting/menu' />} />
      </Route>
    </Routes>
  )
}

export default SettingPage
