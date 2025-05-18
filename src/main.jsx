// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppThemeProvider } from './contexts/AppContextThemeSwitcher.jsx'
import './index.css' // Contains Tailwind directives AND imports app-themes.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
)