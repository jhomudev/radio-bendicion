import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/system'
import PlayerProvider from './context/PlayerContext.jsx'
import './index.css'
import PageProvider from './context/PageContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <PageProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </PageProvider>
  </NextUIProvider>
)
