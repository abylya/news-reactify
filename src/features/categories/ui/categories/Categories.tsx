import styles from "./styles.module.css";
import { forwardRef, type ForwardedRef } from "react";
import type { CategoriesType } from "@/entities/category";

interface IProps {
  categories: CategoriesType[];
  chengCategory: (str: CategoriesType) => void;
  currentCategory: CategoriesType;
}

const Categories = forwardRef<HTMLDivElement, IProps>(
  (
    { categories, chengCategory, currentCategory },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.list}>
        <span key="All">
          <button
            className={!currentCategory ? styles.active : styles.btn_category}
            onClick={() => chengCategory("")}
          >
            All
          </button>
        </span>
        {categories.map((item) => (
          <span key={item}>
            <button
              className={
                item === currentCategory ? styles.active : styles.btn_category
              }
              onClick={() => chengCategory(item)}
            >
              {item}
            </button>
          </span>
        ))}
      </div>
    );
  },
);

Categories.displayName = "Categories";
export default Categories;
