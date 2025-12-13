
import styles from "./styles.module.css";
import { TOTAL_PAGE } from "../../../../constants/constants";
export default function Pagination({changePage,currentPage}) {
  const prevNews=currentPage-1;
  const nextNews=currentPage+1;
  return <div className={styles.pagination}>
        <button className={styles.btn_previos} onClick={()=>changePage('page_number',prevNews)} disabled={currentPage<=1}>{"<"}</button>
        <ul className={styles.list_page}>
          {[...Array(TOTAL_PAGE)].map((_,index)=>{const page=index+1;const bool=currentPage===page;
            return <li key={index} ><button className={bool?styles.btn_action:styles.btn_page} disabled={bool} onClick={()=>changePage('page_number',page)}>{page}</button></li>
          })}
        </ul>
        <button className={styles.btn_next} onClick={()=>changePage('page_number',nextNews)} disabled={currentPage>=TOTAL_PAGE}>{">"}</button>
  </div>
}
