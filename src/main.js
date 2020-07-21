import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
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
     <Text val={valu} inc={inc}/> <br/>
     <Text val={valu} inc={inc}/> <br/>
     <Text val={valu} inc={inc}/> <br/>
     <Text val={valu} inc={inc}/>
     
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
