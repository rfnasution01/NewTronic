import { createBrowserRouter } from 'react-router-dom'
import { DetailPlayList, Homepage, MainLayout, NotFound } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'detail',
        element: <DetailPlayList />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
