
import styles from "./styles.module.css";

export default function Pagination({totalPage,changePage,currentPage}) {
  return <div className={styles.pagination}>
        <button className={styles.btn_previos} onClick={()=>changePage('page_number',currentPage-1)} disabled={currentPage<=1}>{"<"}</button>
        <ul className={styles.list_page}>
          {[...Array(totalPage)].map((_,index)=>{const page=index+1;const bool=currentPage===page;
            return <li key={index} ><button className={bool?styles.btn_action:styles.btn_page} disabled={bool} onClick={()=>changePage('page_number',page)}>{page}</button></li>
          })}
        </ul>
        <button className={styles.btn_next} onClick={()=>changePage('page_number',currentPage+1)} disabled={currentPage>=totalPage}>{">"}</button>
  </div>
}
