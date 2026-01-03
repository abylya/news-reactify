import styles from "./styles.module.css";
import NextNews from "./nextNews/NextNews";
import SearchNews from "./searchNews/SearchNews";

import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppSelector } from "../../store";

export default function NextNewsWrapper() {
  const requestParam = useAppSelector((state) => state.news.filters);
  const { data, isLoading } = useGetNewsQuery({ ...requestParam });
  return (
    <>
      <div className={styles.news_wrapper}>
        <SearchNews></SearchNews>

        <NextNews news={data?.news} loading={isLoading}></NextNews>
      </div>
    </>
  );
}
