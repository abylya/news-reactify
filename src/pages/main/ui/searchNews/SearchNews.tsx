import Slider from "@/features/slider/ui/slider/Slider";
import styles from "./styles.module.css";
import Categories from "@/features/categories/ui/categories/Categories";
import Search from "@/features/search/ui/search/Search";

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
