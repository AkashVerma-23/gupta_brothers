import React, { useEffect, useState } from 'react'
import Home from './comp/home'
import './App.css'
import Image from './comp/image'

const App = () => {
  const[show,setShow]=useState(true);
  useEffect(() => {
    const sh=setTimeout(()=>{
      setShow(false);
    },3300);
    return ()=>
      clearTimeout(sh);
  }, []);

  
  return (
    <>
    <div>
        {show ? <Image/> : <Home/>}
    </div>
    </>
  );
}

export default App
