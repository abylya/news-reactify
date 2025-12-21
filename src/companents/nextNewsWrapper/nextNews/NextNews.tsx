import type { FnChangePage, INews } from "../../../interfaces";
import PaginationWrapper from "../../paginationWrapper/PaginationWrapper";
import NewsList from "./newsList/NewsList";
import styles from "./styles.module.css";

interface IProps {
  news: INews[] | undefined;
  changePage: FnChangePage;
  currentPage: number;
  loading: boolean;
}

export default function NextNews({
  news,
  changePage,
  currentPage,
  loading,
}: IProps) {
  return (
    <>
      <div className={styles.next_news}>
        <PaginationWrapper
          top
          bottom
          changePage={changePage}
          currentPage={currentPage}
        >
          <NewsList news={news} loading={loading} />
        </PaginationWrapper>
      </div>
    </>
  );
}
