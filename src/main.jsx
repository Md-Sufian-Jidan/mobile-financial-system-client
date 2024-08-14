import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
// import MainLayout from './Layouts/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* <MainLayout /> */}
    </RouterProvider>
  </StrictMode>,
)
