
import styles from "./styles.module.css";
export default function Skiliton({count=1}) {
  return <>
         {count>1?<ul className={styles.list}>{[...Array(count)].map((_,index)=><li key={index} className={styles.item}></li>)}</ul>:<div className={styles.banner}></div>}
  </>
}