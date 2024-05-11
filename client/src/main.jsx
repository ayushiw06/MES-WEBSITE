
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-wa31ktduyjaegv71.us.auth0.com"
      clientId="nru3fYbxNbPEv5G91cMMxo1AmnJsbgTl"
      authorizationParams={{
        redirect_uri: "http://mes.ecellmit.com/Pass"
    }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
)
