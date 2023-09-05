import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const Equipments = lazy(() => import('./pages/Equipments'))
const Entries = lazy(() => import('./pages/Entries'))
const Mixins = lazy(() => import('./pages/Mixins'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Equipments />,
      },
      {
        path: '/entries',
        element: <Entries />,
      },
      {
        path: '/mixins',
        element: <Mixins />,
      },
    ],
  },
])

export default router
