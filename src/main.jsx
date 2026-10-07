import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {Profile, Settings, Feed } from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Profile />
    <Settings />
    <Feed />
  </StrictMode>,
)
