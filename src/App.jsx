// rrd imports
import { Children } from 'react'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'

// pages
import Home from './pages/Home'
import Create from './pages/Create'
import Recipie from './pages/Recipie'
import Error from './pages/Error'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'create',
          element: <Create/>
        },
        {
          path: 'recipie/:id',
          element: <Recipie/>
        },
        
      ]
    },

  ])
  
  return <RouterProvider router={routes}/>
}

export default App