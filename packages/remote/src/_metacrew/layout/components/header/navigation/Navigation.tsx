import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { useLayout } from '../../../core'
import { usePageData } from '../../../core/PageData'

const PageTitle = () => {
  const { pageTitle, pageDescription, pageBreadcrumbs, componentRight } = usePageData()
  const { config, classes } = useLayout()
  const navigate = useNavigate();
  const appPageTitleDirection = config.app?.pageTitle?.direction
  return (
    <div className='app-container container-fluid' style={{ height: '64px' }} id="kt_app_header_wrapper">
      <div
        className='d-flex justify-content-between align-items-center py-4'
      >
        {/* begin::Title */}
        <div className='d-flex justify-content-start align-items-center'>
          <button
            className='btn btn-sm btn-icon w-auto'
            type='button'
            onClick={() => navigate(-1)}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-dark'>
              <path d="M7 13L1 7L7 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className='ms-3 text-dark fs-mc-16'>{config.app?.pageTitle?.display && pageTitle && pageTitle}</div>
          </button>
        </div>
        <div>
          <>{componentRight}</>
        </div>
        {/* end::Title */}
      </div>
    </div>
  )
}

export { PageTitle }
