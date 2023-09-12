import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const Equipments = lazy(() => import('./pages/Equipments'))
const Options = lazy(() => import('./pages/Options'))
const FusionEquipments = lazy(() => import('./pages/FusionEquipments'))

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
        path: '/options',
        element: <Options />,
      },
      {
        path: '/fusion-equipments',
        element: <FusionEquipments />,
      },
    ],
  },
])

export default router
