import Auth from '../components/Auth'
import Main from '../components/Main'
import RealTimeDatabase from '../components/RealTimeDatabase'
import Firestore from '../components/Firestore'
import Home from '../components/Home'
import Layout from '../components/Layout'

export const routePath = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/realtimedatabase', element: <RealTimeDatabase /> },
          { path: '/firestore', element: <Firestore /> },
          { path: '/auth', element: <Auth /> },
        ],
      },
    ],
  },
]
