// import section
import './App.css';
import {Modal} from './components/Modal';
import {Quiz} from './components/Quiz'
import React, {useState} from 'react'
import {Characters} from './components/Characters'
//App component
function App() {
const [modal,setModal]= useState(false);
const [ready,setReady] = useState(false);
const [category, setCategory] = useState(null);

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

if(category===null){
  return(
  <>
<h2>Select your category</h2>
  <Characters characterSet={characterSet}/>
  </>
  )
}
  return (
  <>
  <h2>You have chosen {category}</h2> 
    <button onClick={()=>setModal(!modal)}>{modal?"X":"Start"}</button>
    {modal?<Modal noHandler={noHandler} yesHandler={yesHandler}/>:<h1>Click on the button</h1>}
    {ready?<Quiz/>:<h3>...</h3>}
    </>
  );
}

export default App;
