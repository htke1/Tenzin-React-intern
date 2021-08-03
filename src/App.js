// import section
// branch develop is added.
import './App.css';
import {Modal} from './components/Modal';
import {Quiz} from './components/Quiz'
import React, {useState} from 'react'
import {Characters} from './components/Characters'
import GoogleAuth from './GoogleAuth';
import {useSelector} from 'react-redux'
//App component
function App() {
const [modal,setModal]= useState(false);
const [ready,setReady] = useState(false);
const [category, setCategory] = useState(null);
const auth = useSelector((state)=>state.auth.isSignedIn);
//Helper function
function noHandler(){
  setModal(!modal)
  setReady(false)

}

function yesHandler(){
  setReady(true)
  
}
function characterSet(name){
  setCategory(name);
}
function handleMainBtn(){
  setModal(!modal)
}

if(!auth){
  return(
    <div id="login">
     <GoogleAuth/>
    <h3>You need to login to attempt the quiz</h3>
    </div>
  )
}

if(category===null){
  return(
  <div id="category">
  <GoogleAuth/>
<h2>Select your category</h2>
  <Characters characterSet={characterSet}/>
  </div>
  )
}
  return (
  <div id="main">
  
  <h2>You have chosen {category}</h2> 
    <button onClick={handleMainBtn}>{modal?"X":"Start"}</button>
    {modal?<Modal noHandler={noHandler} yesHandler={yesHandler}/>:<h1>Click on the button</h1>}
    {ready?<Quiz category={category}/>:<h3>...</h3>}
    </div>
  );
}

export default App;
