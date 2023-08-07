
import React from 'react';
// Axios
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Apps
import './_metacrew/assets/fonticon/fonticon.css'
import { MetacrewI18nProvider } from './_metacrew/i18n/Metacrewi18n'

import './_metacrew/assets/sass/custom/custom.scss'
import './_metacrew/assets/sass/plugins.scss'
import './_metacrew/assets/sass/style.react.scss'
import './_metacrew/assets/sass/style.scss'
import { AuthProvider, setupAxios } from './app/pages/auth'
import { AppRoutes } from './app/routing/AppRoutes'

setupAxios(axios);
const queryClient = new QueryClient();
const Main = () => {
    return (
        <>
        <QueryClientProvider client={queryClient}>
          <MetacrewI18nProvider>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </MetacrewI18nProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        </>
    ) 
  }
  
  export default Main ;
