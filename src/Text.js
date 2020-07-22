import React from 'react';

export default function Text(prop)
{
    const {inc ,val , factor} = prop;
    function handleChangeVal(e) {
        const newValue = (e.target.value) ;
       // alert (newValue);
         //let timer = number(newValue) / factor
         inc(newValue,factor);
      }
return (
    <>
        <input type="number" value={val} onChange={handleChangeVal} />   
    </>
 );

}



