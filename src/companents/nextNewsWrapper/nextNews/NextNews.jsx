
import PaginationWrapper from "../../paginationWrapper/PaginationWrapper";
import NewsList from "./newsList/NewsList";
import styles from "./styles.module.css";


export default function NextNews({news,changePage,currentPage,loading}) {
  

  return <>
      <div className={styles.next_news}>
        <PaginationWrapper top bottom changePage={changePage} currentPage={currentPage}>
          <NewsList news={news} style='colum' loading={loading}></NewsList>
        </PaginationWrapper>
      </div>
  </>
}