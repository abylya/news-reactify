import { useState,memo, useMemo, useCallback } from "react";
import styles from "./styles.module.css";



export default function Test1() {
  const [count,setCount]=useState(1);
  const[firstHook,setFirstHook]=useState('useEffect');
  const[secondHook,setSecondHook]=useState('useColback');
  const[isTiema,setTiema]=useState(false);

  //const tiema=isTiema?"background-color: #2b2a2a;color:#fff":"background-color: #fbf5f5ff;color:#000";
  const tiema={
    backgroundColor:isTiema?'#2b2a2a':'#fbf5f5ff',
    color:isTiema?'#fff':'#000',
  }
  function handleTiema() {
    setTiema(pr=>!pr);
  }
function handleClick() {
  setCount(c=>c+1);
}
const handleReset=useCallback(
  () =>{
    setCount(0);
  },[]
)


const hooks=useMemo(()=>{
  return {firstHook,secondHook};
},[firstHook,secondHook]);

  return <div className={styles.wrapper} style={{...tiema}}>
         <Title hooks={hooks} handleReset={handleReset}></Title>
         <Count count={count}></Count>
        <button onClick={handleClick}>add count</button>
        <button onClick={handleTiema}>thema</button>

     </div>
  
}
 

const Title=memo(({hooks,handleReset}) =>{
  const{firstHook,secondHook}=hooks;
  return<>
  <h1>firsHook vs {firstHook} secondHook vs {secondHook}</h1>
  <button onClick={handleReset}>Reset</button>
  </>
  
});

function Count({count}) {
  return(
    <h3>{count}</h3>
  )
}