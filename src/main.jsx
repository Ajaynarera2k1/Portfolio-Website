import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import ProjectSection from './Components/ProjectSec.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:< Layout />,
    children:[
      {
        path:'',
        element:<Hero />
      },
      {
        path:'projects',
        element:<ProjectSection />
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'skills',
        element:<Skills />
      },
      {
        path:'contact',
        element:<Contact />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
