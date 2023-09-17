import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChatContextProvider } from './context/ChatContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChatContextProvider>
    <React.StrictMode>

      <App />

    </React.StrictMode>
  </ChatContextProvider>,
)
