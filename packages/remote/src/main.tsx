import React from 'react'
import ReactDOM from 'react-dom/client'
// Axios
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// Apps
import './_metacrew/assets/fonticon/fonticon.css'
import { MetacrewI18nProvider } from './_metacrew/i18n/Metacrewi18n'

import './_metacrew/assets/sass/custom/custom.scss'
import './_metacrew/assets/sass/plugins.scss'
import './_metacrew/assets/sass/style.react.scss'
import './_metacrew/assets/sass/style.scss'
import { AuthProvider, setupAxios } from './app/pages/auth'
import { AppRoutes } from './app/routing/AppRoutes'

setupAxios(axios)

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MetacrewI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetacrewI18nProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} />  */}
    </QueryClientProvider>
  </React.StrictMode>
)