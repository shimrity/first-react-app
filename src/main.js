import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';

import '../css/main.css';

const App = () => {
  const [isTimeToLay, setIsTimeToLayVal] = useState(false);
  const [Msg, setMsgVal] = useState("");
  const [RandomNum ,setRandomNum] = useState(Math.floor(Math.random() * 1000) + 1);
  
  setTimeout(function(){
    setIsTimeToLayVal(x => !x)
   },5000);
  

  function TryGuess(e)
  {
    const elm = document.querySelector('.GuessNumber');
    const GuessNum=Number(elm.value);
    debugger;
    if(GuessNum==RandomNum)
      setMsgVal("You Did It!!!!!");// ==> "+ RandomNum);
    else
    {
        if(GuessNum>RandomNum)
        {
          if(!isTimeToLay)
            setMsgVal("Too Big ");//+ RandomNum + "------" + isTimeToLay);
         else
            setMsgVal("Too Small ");//+ RandomNum + "-----" + isTimeToLay);
        }
        else
        {
          if(isTimeToLay)
            setMsgVal("Too Big ");//+ RandomNum + "------" + isTimeToLay);
         else
            setMsgVal("Too Small ");//+ RandomNum + "-----" + isTimeToLay);
        }

    }  

  }
  function Restart(e)
  {
    document.querySelector('.GuessNumber').value ='';    
    setRandomNum(Math.floor(Math.random() * 1000) + 1);
    setMsgVal("");
    setisTimeToLayVal(false)
  }
  return (
    <div>
      <p>Guess Number:
      <input type="number" className="GuessNumber"></input> 
      <button onClick={TryGuess}>TryGuess</button></p>
      <label>{Msg}</label>
      <br/>
      <button onClick={Restart}>Restart</button>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
