import loadable from '@loadable/component'

export const NotFound = loadable(() => import('@/pages/notFound'))
export const Homepage = loadable(() => import('@/pages/homepage'))
export const DetailPlayList = loadable(() => import('@/pages/detail'))
export const MainLayout = loadable(() => import('@/App'))
