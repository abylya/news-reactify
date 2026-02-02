import { useAppSelector } from "@/app/appSotre";
import styles from "./styles.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import SearchNews from "../searchNews/SearchNews";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widgets/news/ui";

export default function NextNewsWrapper() {
  const requestParam = useAppSelector((state) => state.news.filters);
  const shouldSkip = useAppSelector((state) => state.news.loading);
  const { news, isLoading } = useGetNewsQuery(
    { ...requestParam },
    {
      selectFromResult: ({ data, isLoading, error }) => {
        return {
          news: data?.news ?? [],
          isLoading,
          error,
        };
      },
      skip: shouldSkip, //true запрос не отправшт
    },
  );
  const { data } = useGetNewsQuery(requestParam);
  console.log(data);
  return (
    <>
      <div className={styles.news_wrapper}>
        <SearchNews></SearchNews>
        <Pagination top bottom>
          <NewsList
            news={news}
            loading={isLoading}
            type="item"
            direction="column"
          />
        </Pagination>
      </div>
    </>
  );
}
