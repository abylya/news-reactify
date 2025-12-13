
import styles from "./styles.module.css";
import NextNews from "./nextNews/NextNews";
import SearchNews from "./searchNews/SearchNews";

export default function NextNewsWrapper({changePage,currentCategory,currentPage,news,loading}) {
  

  return <>
    <div className={styles.news_wrapper}>
      <SearchNews currentCategory={currentCategory} changePage={changePage}></SearchNews>
      <NextNews news={news} currentPage={currentPage} loading={loading} changePage={changePage}></NextNews>
    </div>
  </>
}