
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Debuonse } from "../../../../helps/debounse.js";

export default function Search({changePage}) {
   const[keywords,setKeywords]=useState('')

   const debouns=Debuonse(keywords,1500);
 //console.log(debouns);
   function handleKeywords(e) {
    const value=e.target.value;
    setKeywords(value);
   }

   useEffect(()=>{

      changePage('keywords',debouns);
    
   },[debouns]);

  return<>
     <div className={styles.search}>
      <input type="text" className={styles.input} value={keywords} onChange={(e)=>handleKeywords(e)} placeholder="java Script"/>
     </div>
  </>
}