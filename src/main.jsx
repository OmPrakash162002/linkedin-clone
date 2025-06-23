import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Store/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)
