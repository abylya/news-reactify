import styles from "./styles.module.css";
import Categories from "@/features/categories/ui/categories/Categories";
import { useAppDispatch, useAppSelector } from "@/app/appSotre";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setFilter } from "@/entities/news/model/newsSlice";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Slider } from "@/widgets/slider";

export default function SearchNews() {
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const shouldSkip = useAppSelector((state) => state.news.loading);
  const { categories, error } = useGetCategoriesQuery(null, {
    selectFromResult: ({ data, isLoading, error }) => ({
      categories: data?.categories,
      isLoading,
      error,
    }),
    skip: shouldSkip, //true запрос не отправшт
  });
  // const categories = data?.categories ? data.categories : null;
  function chengCategory(category: string) {
    dispatch(setFilter({ key: "category", value: category }));
  }
  const currentCategory = useAppSelector((state) => {
    return state.news.filters.category;
  });
  if (error) {
    console.log(error, "Search block");
    return <div>no content</div>;
  }
  return (
    <>
      <div className={styles.search_news}>
        {categories ? (
          <Slider step={150} isDark={isDark}>
            <Categories
              categories={categories}
              chengCategory={chengCategory}
              currentCategory={currentCategory}
            ></Categories>
          </Slider>
        ) : (
          <span>no categories</span>
        )}
        {/* <Search></Search> */}
      </div>
    </>
  );
}
