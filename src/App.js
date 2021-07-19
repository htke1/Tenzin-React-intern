
import './App.css';
import {Modal} from './components/Modal';
import {Quiz} from './components/Quiz'
import React, {useState} from 'react'
import {Characters} from './components/Characters'
function App() {
const [modal,setModal]= useState(false);
const [ready,setReady] = useState(false);
const [character, setCharacter] = useState(null);
function noHandler(){
  setModal(!modal)
}

function yesHandler(){
  setReady(!ready)
}
function characterSet(name){
  setCharacter(name);
}
  return (<>
  <h2>Select your character</h2>
  <Characters characterSet={characterSet}/>
    {}
    <button onClick={()=>setModal(!modal)}>Show Modal</button>
    {modal?<Modal noHandler={noHandler} yesHandler={yesHandler}/>:<h1>Click on the button</h1>}
    {ready?<Quiz/>:<h3>...</h3>}
    </>
  );
}

export default App;
