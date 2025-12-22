import styles from "./styles.module.css";
import NextNews from "./nextNews/NextNews";
import SearchNews from "./searchNews/SearchNews";
import { PAGE_SIZE } from "../../constants/constants";
import useFilter from "../../hooks/useRequestFilter";
import { getNews } from "../../api/apiNews";
import useFetch from "../../helps/useFetch";
import type { IFiltersNews, IResponsNews } from "../../interfaces";

export default function NextNewsWrapper() {
  const { requestParam, chengeRequestParam } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  });

  const { data, loading } = useFetch<IResponsNews, IFiltersNews>(
    getNews,
    requestParam
  );
  const currentPage = requestParam.page_number;

  return (
    <>
      <div className={styles.news_wrapper}>
        <SearchNews
          currentCategory={requestParam?.category}
          changePage={chengeRequestParam}
        ></SearchNews>

        <NextNews
          news={data?.news}
          currentPage={currentPage}
          loading={loading}
          changePage={chengeRequestParam}
        ></NextNews>
      </div>
    </>
  );
}
