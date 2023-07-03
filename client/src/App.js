import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';


function App() {
  
  const clientId='585642806412-5eu8gbq6nssajg9t8sb136as3aq8p1fk.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;