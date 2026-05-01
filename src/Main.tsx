import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Deve esserci 'root' qui, che corrisponde all'id nel file index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
