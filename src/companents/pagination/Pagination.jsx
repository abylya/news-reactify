
import styles from "./styles.module.css";
export default function Pagination({totalPage=10,handleClickPage,handleNextPage,handlePreviosPage,currentPage}) {
  return <div className={styles.pagination}>
        <button className={styles.btn_previos} onClick={handlePreviosPage} disabled={currentPage<=1}>{"<"}</button>
        <ul className={styles.list_page}>
          {[...Array(totalPage)].map((_,index)=>{
            return <li key={index} ><button className={styles.btn_page} disabled={index+1===currentPage} onClick={()=>{handleClickPage(index+1)}}>{index+1}</button></li>
          })}
        </ul>
        <button className={styles.btn_next} onClick={handleNextPage} disabled={currentPage>=totalPage}>{">"}</button>
  </div>
}