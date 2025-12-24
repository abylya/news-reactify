import styles from "./styles.module.css";
import { forwardRef, type ForwardedRef } from "react";
import type { CategoriesType, FnChangePage } from "../../../../interfaces";
import { useGetCategoriesQuery } from "../../../../store/services/newsApi";

interface IProps {
  currentCategory: CategoriesType;
  changePage: FnChangePage;
}

const Categories = forwardRef(
  (
    { changePage, currentCategory }: IProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { data, isLoading, error } = useGetCategoriesQuery(null);

    if (isLoading) {
      //console.log(loading);
      return <p> Загрузка </p>;
    }

    if (error) {
      return <p> `Ошибка`</p>;
    }

    if (data && data?.categories.length > 0) {
      return (
        <>
          <div ref={ref} className={styles.list}>
            <span key="All">
              <button
                className={
                  !currentCategory ? styles.active : styles.btn_category
                }
                onClick={() => changePage("category", null)}
              >
                All
              </button>
            </span>
            {data?.categories.map((item) => {
              return (
                <span key={item}>
                  <button
                    className={
                      item === currentCategory
                        ? styles.active
                        : styles.btn_category
                    }
                    onClick={() => changePage("category", item)}
                  >
                    {item}{" "}
                  </button>
                </span>
              );
            })}
          </div>
        </>
      );
    }
  }
);
Categories.displayName = "Categories";
export default Categories;
