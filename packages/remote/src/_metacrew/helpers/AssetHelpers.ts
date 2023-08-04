export const toAbsoluteUrl = (pathname: string) => (import.meta.env.REACT_APP_PUBLIC_URL || '') + pathname
