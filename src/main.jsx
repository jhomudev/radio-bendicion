import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/system'
import PlayerProvider from './context/PlayerContext.jsx'
import App from './App.jsx'
import './index.css'
import PageProvider from './context/PageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <PageProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </PageProvider>
    </NextUIProvider>
  </React.StrictMode>
)
