import React from 'react';
import ReactDOM from 'react-dom';
import MultiText from './MultiText';
import { useState } from 'react';

import '../css/main.css';

const App = () => {
  const [valu, setVale] = useState("");
  function inc(val)
  {
    setVale(val) 
  }
  
  return (
    <div>
      <h1>Enter text:</h1>
     <MultiText val={valu} inc={inc}/> <br/>
     <MultiText val={valu} inc={inc}/> <br/>
     <MultiText val={valu} inc={inc}/> <br/>
      <lable>{valu}</lable>
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
