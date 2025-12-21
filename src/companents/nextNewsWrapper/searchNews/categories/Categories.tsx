import styles from "./styles.module.css";
import useFetch from "../../../../helps/useFetch";
import { getCategories } from "../../../../api/apiNews";
import { forwardRef, type ForwardedRef } from "react";
import type {
  CategoriesType,
  FnChangePage,
  IResponsCategories,
} from "../../../../interfaces";

interface IProps {
  currentCategory: CategoriesType;
  changePage: FnChangePage;
}

const Categories = forwardRef(
  (
    { changePage, currentCategory }: IProps,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    const { data, error, loading } = useFetch<IResponsCategories, null>(
      getCategories
    );

    if (loading) {
      //console.log(loading);
      return <p> Загрузка </p>;
    }

    if (error) {
      return <p> `Ошибка ${error}`</p>;
    }

    if (data && data?.categories.length > 0) {
      return (
        <>
          <ul ref={ref} className={styles.list}>
            <li key="All">
              <button
                className={
                  !currentCategory ? styles.active : styles.btn_category
                }
                onClick={() => changePage("category", null)}
              >
                All
              </button>
            </li>
            {data?.categories.map((item) => {
              return (
                <li key={item}>
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
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }
);

export default Categories;
