import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/reset.css.ts';
import './shared/styles/global.css.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
