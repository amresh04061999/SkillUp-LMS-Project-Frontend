import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { myTheme } from './styles/Theme.ts'
// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  return (
    <>
      <StrictMode>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
          <App />
        </MantineProvider>
      </StrictMode>
      ,
    </>
  )
}
createRoot(document.getElementById('root')!).render(<Main />)
