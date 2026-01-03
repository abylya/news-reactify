import styles from "./styles.module.css";
import Categories from "./categories/Categories";
import Search from "./search/Search";
import Slider from "../../slider/Slider";

export default function SearchNews() {
  return (
    <>
      <div className={styles.search_news}>
        <Slider>
          <Categories></Categories>
        </Slider>
        <Search></Search>
      </div>
    </>
  );
}
