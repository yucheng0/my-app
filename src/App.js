
import {LoginSocialFacebook} from 'reactjs-social-login'
import {FacebookLoginButton} from 'react-social-login-buttons'


function App() {
  return (
    <LoginSocialFacebook
    appId = "1242100280072160"
    onResolve={(reponse)=>{
      console.log(reponse)
    }}
    onReject = {(error)=>{
      console.log (error)
    }}
    >
   <FacebookLoginButton/>

    </LoginSocialFacebook>
  );
}

export default App;
