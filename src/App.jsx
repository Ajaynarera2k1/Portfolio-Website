
import './App.css'
import AboutUs from './Components/ProjectSec'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import ProjectSection from './Components/ProjectSec'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
         const router = createBrowserRouter([
          {
            path:'/',
            element:<Header />
          },
          {
            path:'/Hero',
            element:<Hero />
          },
          {
            path:'/Projects',
            element:<ProjectSection />
          },
          {
            path:'/about',
            element:<AboutUs />
          },
          {
            path:'/contact',
            element:<Contact />
          },
        
         ])

  return (
    <>
   
          <Header />
          <Hero />
          <ProjectSection />
          <Skills />
          <Contact />
          <Footer />
          {/* <RouterProvider router={router} /> */}
       

    </>
  )
}

export default App
