
import styles from "./styles.module.css";

export default function Search({value,handleSearch}) {
   

  return<>
     <div className={styles.search}>
      <input type="text" className={styles.input} value={value} onChange={(e)=>{handleSearch(e.target.value)}} placeholder="java Script"/>
     </div>
  </>
}