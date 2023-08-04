import { useLayout } from '../../../core'
import { PageTitle } from './Navigation'

const NavigationWrapper = () => {
  const { config } = useLayout()
  if (!config.app?.pageTitle?.display) {
    return null
  }

  return <PageTitle />
}

export { NavigationWrapper }
