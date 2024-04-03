import { createBrowserRouter } from 'react-router-dom'
import { Homepage, MainLayout, NotFound } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
