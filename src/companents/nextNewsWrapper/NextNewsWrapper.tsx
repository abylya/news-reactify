import styles from "./styles.module.css";
import NextNews from "./nextNews/NextNews";
import SearchNews from "./searchNews/SearchNews";
import { PAGE_SIZE } from "../../constants/constants";
import useFilter from "../../hooks/useRequestFilter";

import { useGetNewsQuery } from "../../store/services/newsApi";

export default function NextNewsWrapper() {
  const { requestParam, chengeRequestParam } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  });

  const { data, isLoading } = useGetNewsQuery(requestParam);
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
          loading={isLoading}
          changePage={chengeRequestParam}
        ></NextNews>
      </div>
    </>
  );
}
