
import NewsList from "./newsList/NewsList";
import Pagination from "./pagination/Pagination";
import styles from "./styles.module.css";


export default function NextNews({news,changePage,currentPage,loading}) {
  

  return <>
      <div className={styles.next_news}>
        <Pagination changePage={changePage} currentPage={currentPage}></Pagination>
        <NewsList news={news} style='colum' loading={loading}></NewsList>
        {/* <Pagination changePage={changePage} currentPage={currentPage}></Pagination> */}
      </div>
  </>
}