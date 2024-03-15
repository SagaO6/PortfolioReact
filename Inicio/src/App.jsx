import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import MeusProjetos from './components/MeusProjetos/MeusProjetos'
import SobreMim from './components/SobreMim/SobreMim'
import Habilidades from './components/Habilidades/Habilidades'


function App() {

  const router = createBrowserRouter([

    {

      path: "/",
      element: <Habilidades />

    },

    {

      path: "/SobreMim",
      element: <SobreMim />

    },

    {

      path: "/MeusProjetos",
      element: <MeusProjetos />

    },

    {

      path: "/Habilidades",
      element: <Habilidades />

    }

  ])

  return (
    <>

      <div>

        <RouterProvider router={router} />

      </div>

      {/* <Home/> */}
      {/* <SobreMim/> */}
      {/* <MeusProjetos/> */}

    </>
  )
}

export default App
