/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, createContext, useContext, useEffect, useState } from 'react'
import { WithChildren } from '../../helpers'

export interface PageLink {
  title: string
  path: string
  isActive: boolean
  isSeparator?: boolean
}

export interface PageDataContextModel {
  pageTitle?: string
  setPageTitle: (_title: string) => void
  pageDescription?: string
  setPageDescription: (_description: string) => void
  pageBreadcrumbs?: Array<PageLink>
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void
  componentRight?: React.ReactNode,
  setComponentRight: (_component: React.ReactNode) => void,
  isActionRight?: boolean,
  setIsActionRight: (_isAction: boolean) => void
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => { },
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => { },
  setPageDescription: (_description: string) => { },
  setComponentRight: (_component: React.ReactNode) => { },
  setIsActionRight: (_isAction: boolean) => { }
})

const PageDataProvider: FC<WithChildren> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>('')
  const [pageDescription, setPageDescription] = useState<string>('')
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([])
  const [componentRight, setComponentRight] = useState<React.ReactNode>(null)
  const [isActionRight, setIsActionRight] = useState<boolean>(false)
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
    componentRight,
    setComponentRight,
    isActionRight,
    setIsActionRight,
  }
  return <PageDataContext.Provider value={value}>{children}</PageDataContext.Provider>
}

function usePageData() {
  return useContext(PageDataContext)
}

type Props = {
  description?: string
  breadcrumbs?: Array<PageLink>,
  componentRight?: React.ReactNode
}

const PageTitle: FC<Props & WithChildren> = ({ children, description, breadcrumbs, componentRight }) => {
  const { setPageTitle, setPageDescription, setPageBreadcrumbs, setComponentRight } = usePageData()
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString())
    }
    return () => {
      setPageTitle('')
    }
  }, [children])

  useEffect(() => {
    if (description) {
      setPageDescription(description)
    }
    return () => {
      setPageDescription('')
    }
  }, [description])

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs)
    }
    return () => {
      setPageBreadcrumbs([])
    }
  }, [breadcrumbs])

  // useEffect(() => {
  //   if (componentRight) {
  //     setComponentRight(componentRight)
  //   }
  //   return () => {
  //     setComponentRight(null)
  //   }
  // }, [componentRight])

  return <></>
}

const PageDescription: FC<WithChildren> = ({ children }) => {
  const { setPageDescription } = usePageData()
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString())
    }
    return () => {
      setPageDescription('')
    }
  }, [children])
  return <></>
}

export { PageDescription, PageTitle, PageDataProvider, usePageData }
