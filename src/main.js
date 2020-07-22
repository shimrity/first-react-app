import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import { useState } from 'react';

import '../css/main.css';

const App = () => {
  const [valu, setVale] = useState(0);
  function inc(val,f)
  {
    //alert(val);
    valu =  val/f;
    setVale(valu);
  }
  
  return (
    <div>
      <h1>Enter time:</h1>
     <Text val={valu} inc={inc} factor={1}/> <br/>
     <Text val={valu} inc={inc} factor={60}/> <br/>
     <Text val={valu} inc={inc} factor={3600}/> <br/>    
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
