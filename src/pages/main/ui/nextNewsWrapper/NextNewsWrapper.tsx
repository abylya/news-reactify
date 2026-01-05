import { useAppSelector } from "@/app/appSotre";
import styles from "./styles.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import SearchNews from "../searchNews/SearchNews";
import NextNews from "../nextNews/NextNews";

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
