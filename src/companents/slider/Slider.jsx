import React, { useRef } from "react";
import styles from "./styles.module.css";

export default function Slider({children}) {
  
  const refSlider=useRef(null);
  function handleClickLeft() {
   refSlider.current.scrollLeft+=150;   
  }
  function handleClickRight() {
   refSlider.current.scrollLeft-=150;   
  }
  return <div className={styles.slider}>
     <button className={styles.arrow} onClick={handleClickLeft} > {"<"} </button>
       {React.cloneElement(children,{ref:refSlider})}
     <button className={styles.arrow} onClick={handleClickRight}> {">"} </button>
  
  </div>
  
}