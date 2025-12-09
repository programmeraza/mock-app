import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster position="top-center" 
        toastOptions={{
          style: {
            background: '#A175F0',
            color: '#fff',
            borderRadius: '24px',
            padding: '14px 20px',
            fontSize: '14px',
            fontWeight: '600',
          },
          success: {
            iconTheme: {
              primary: '#fff',
              secondary: '#A175F0',
            },
          },
          error: {
            style: {
              background: '#ff4d4f',
            },
          },
        }} />
    <App />
  </BrowserRouter>,
)
