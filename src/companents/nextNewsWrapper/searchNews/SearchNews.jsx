
import styles from "./styles.module.css";
import Categories from "./categories/Categories";
import Search from "./search/Search";
import Slider from "../../slider/Slider";

export default function SearchNews({changePage,currentCategory}) {
   
  return<>
     <div className={styles.search_news}>
      <Slider>
        <Categories changePage={changePage} currentCategory={currentCategory}></Categories>
      </Slider>
      <Search changePage={changePage}></Search>
     </div>
  </>
}