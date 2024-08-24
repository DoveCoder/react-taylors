import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Nav />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
