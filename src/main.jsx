import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'

// For test purposes only
const clientID = "1080025414771-tmjdg3s502bmblhei224tu194fmbh41h.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
