
import styles from "./styles.module.css";

export default function Categories({categories,currentCategory,handleCategory}) {
   

  return<>
     <ul className={styles.list}>
      {categories.map((item)=>{
        return <li key={item}>
                  <button className={item===currentCategory?styles.active:styles.btn_category} onClick={()=>handleCategory(item)}>{item} </button>
              </li>
      })}
     </ul>
  </>
}