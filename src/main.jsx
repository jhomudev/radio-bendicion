import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/system'
import PlayerProvider from './context/PlayerContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </NextUIProvider>
  </React.StrictMode>
)
