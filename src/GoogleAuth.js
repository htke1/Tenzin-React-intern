import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Button } from "semantic-ui-react";
import {useDispatch, useSelector} from 'react-redux'
import {signIn, signOut} from './action'
function GoogleAuth(){
const [auth, setAuth] = useState({})
const dispatch = useDispatch()
const isSignedInside = useSelector((state)=>state.auth.isSignedIn)
console.log(isSignedInside);

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
    dispatch(signIn())
   }
   else{
      dispatch(signOut());
   }
}

    function handleSignIn(){
       auth.signIn()
    }
    function handleSignOut(){
      auth.signOut()
    }


return !isSignedInside?<><h2>Login first</h2> <Button onClick={handleSignIn} >Sign in</Button></>:(
    <>
    <h2>You are logged in.  </h2>
    <Button onClick={handleSignOut}>Sign out</Button>
    </>
)

}
export default GoogleAuth;
