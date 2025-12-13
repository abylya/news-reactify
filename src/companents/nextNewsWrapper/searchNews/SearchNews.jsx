
import styles from "./styles.module.css";
import Categories from "./categories/Categories";
import Search from "./search/Search";

export default function SearchNews({changePage,currentCategory}) {
   
  return<>
     <div className={styles.search_news}>
      <Categories changePage={changePage} currentCategory={currentCategory}></Categories>
      <Search changePage={changePage}></Search>
     </div>
  </>
}