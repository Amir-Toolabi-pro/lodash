import throttle from 'lodash.throttle';
import React, { useCallback, useState } from 'react';

const App = () => {
  const [getNumber,setNumber] = useState(0);

  
  const loged = (getNumber)=>{
    console.log(`number is : ${getNumber}`);
  }
  
  const getThrottle = useCallback(throttle(loged,2000),[]);

  const inc = ()=>{
    setNumber(getNumber+1);
    getThrottle(getNumber)
  }
  const dec = ()=>{
    setNumber(getNumber-1);
  }
  return ( 
    <>
      <h3>تمرین throttle</h3>
      <h1>{getNumber}</h1>
      <button onClick={inc} >+</button>
      <button onClick={dec} >-</button>
    </>
   );
}
 
export default App;