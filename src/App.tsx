
import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
import SignUp from './pages/SignUp'
const clientId = import.meta.env.VITE_CLIENT_ID

const App = () => {

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <SignUp />
    </GoogleOAuthProvider>
  )
}

export default App
