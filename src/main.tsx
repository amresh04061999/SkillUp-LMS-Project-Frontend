import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { myTheme } from './styles/Theme.ts'
import {RouterProvider } from "react-router-dom";
import { router } from './routers/router.tsx'

// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  return (
    <>
      <StrictMode>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
        <RouterProvider router={router} />
        </MantineProvider>
      </StrictMode>
    </>
  )
}
createRoot(document.getElementById('root')!).render(<Main />)
