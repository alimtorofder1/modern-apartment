import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './Provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </StrictMode>,
)
