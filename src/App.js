
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
      {/* 這只是一個按鍵型式, 隨便一個按鍵都可以只要包在LoginFacebook 內即可
      它用冒泡的方式取得, 不用跳到其它
      */}
   <FacebookLoginButton/>
   {/* <button type="button"> hello login</button> */}

    </LoginSocialFacebook>
  );
}

export default App;
