import React from 'react';

export default function MultiText(prop)
{
    const {inc ,val} = prop;
    function handleChangeVal(e) {
        const newValue = (e.target.value);
       // alert(e.target.value)
         inc(newValue);
      }
return (
    <>
        <input type="text" value={val} onChange={handleChangeVal} />   
    </>
 );

}



