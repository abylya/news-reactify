
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
<<<<<<< HEAD
<<<<<<< HEAD:src/companents/nextNewsWrapper/searchNews/search/Search.jsx
import { Debuonse } from "../../../../helps/Debounse";
import { PAGE_SIZE } from "../../../../constants/constants";
=======
import { Debuonse } from "../../helps/Debounse.js";
import { PAGE_SIZE } from "../../constants/constants";
>>>>>>> 99f9538dd63982ebef35ed80a1cfff44846c5b03:src/companents/search/Search.jsx
=======
import { Debuonse } from "../../../../helps/debounse.js";
>>>>>>> refactor2

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