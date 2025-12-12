

import styles from "./styles.module.css";
import useFetch from "../../helps/useFetch";
import {getCategories} from "../../api/apiNews";

export default function Categories({changePage,currentCategory}) {
  
   const{data,error,loading}=useFetch(getCategories);
  
if(loading){ 
  //console.log(loading);
  return <p> Загрузка </p>
}

if(error){
  return <p> `Ошибка ${error}`</p>
}

if(data?.categories.length>0){

  return<>
  
     <ul className={styles.list}>
      <li key='All'>
                  <button className={!currentCategory?styles.active:styles.btn_category} onClick={()=>changePage('categories',null)}>All</button>
              </li>
      {data?.categories.map((item)=>{
        return <li key={item}>
                  <button className={item===currentCategory?styles.active:styles.btn_category} onClick={()=>changePage('categories',item)}>{item} </button>
              </li>
      })}
     </ul>
  </>
}
}