import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Button } from "semantic-ui-react";
import {connect} from 'react-redux'
import {signIn, signOut} from './action'
function GoogleAuth(){
const [auth, setAuth] = useState({})
    useEffect(()=>{
      window.gapi.load("client:auth2",()=>{
       window.gapi.client.init({
           clientId: '1070835949992-jsnu259mrutoaf78cikngslcsh8prdl6.apps.googleusercontent.com',
           scope: 'email'
       }).then(()=>{
          const authh=window.gapi.auth2.getAuthInstance();
          setAuth(authh);
          handleAuth(auth.isSignedIn.get())
          auth.isSignedIn.listen(handleAuth)
       })
      })
    },[auth.isSignedIn])

function handleAuth(isSignedIn){
   if(isSignedIn){
    signIn();
   }
   else{
      signOut();
   }
}

    function handleSignIn(){
       auth.signIn()
    }
    function handleSignOut(){
      auth.signOut()
    }

    const mapStateToProps=(state)=>{
      return {isSignedIn: state.auth.isSignedIn}
    }

return !this.props.isSignedIn?<><h2>Log in first</h2> <Button onClick={handleSignIn} >Sign in</Button></>:(
    <>
    <h2>You are logged in.  </h2>
    <Button onClick={handleSignOut}>Sign out</Button>
    </>
)

}
export default connect(null, {signIn, signOut})(GoogleAuth);
