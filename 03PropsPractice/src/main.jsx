import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Prabhjot" role="Software Developer" age="18"/>
    <App name="Rahul" role="ML Engineer" age="30"/>
    <App name="Prabhjot" role="Software Developer" age="18"/>
    <App name="Chai" age="23" role="Web Developer"/>
    <App />
  </StrictMode>,
)
