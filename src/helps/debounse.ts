import { useEffect, useState } from "react";


export function Debuonse(value:string,timeout:number) {
  const[debValue,setDebValue]=useState(value)

  useEffect(()=>{
    const valueDelay =setTimeout(() => {
      setDebValue(value);
    }, timeout);

    return()=>{
      clearTimeout(valueDelay);
    }
  },[value,timeout]);
  return debValue;
}