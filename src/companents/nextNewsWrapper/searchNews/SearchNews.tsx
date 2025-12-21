import styles from "./styles.module.css";
import Categories from "./categories/Categories";
import Search from "./search/Search";
import Slider from "../../slider/Slider";
import type {
  CategoriesType,
  FnChangePage,
} from "../../../interfaces/index.ts";

interface IProps {
  changePage: FnChangePage;
  currentCategory: CategoriesType;
}
export default function SearchNews({ changePage, currentCategory }: IProps) {
  return (
    <>
      <div className={styles.search_news}>
        <Slider>
          <Categories
            changePage={changePage}
            currentCategory={currentCategory}
          ></Categories>
        </Slider>
        <Search changePage={changePage}></Search>
      </div>
    </>
  );
}
