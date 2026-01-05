import styles from "./styles.module.css";
import { forwardRef, useState, type ForwardedRef } from "react";
import { useAppDispatch } from "@/app/appSotre";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setCategory } from "@/entities/category/model/newsSlice";

const Categories = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const { data, isLoading, error } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();
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
              className={!currentCategory ? styles.active : styles.btn_category}
              onClick={() => {
                setCurrentCategory("");
                dispatch(setCategory({ key: "category", value: "All" }));
              }}
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
                  onClick={() => {
                    setCurrentCategory(item);
                    dispatch(setCategory({ key: "category", value: item }));
                  }}
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
});

Categories.displayName = "Categories";
export default Categories;
