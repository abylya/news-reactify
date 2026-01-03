import type { INews } from "../../../interfaces";
import PaginationWrapper from "../../paginationWrapper/PaginationWrapper";
import NewsList from "./newsList/NewsList";
import styles from "./styles.module.css";

interface IProps {
  news: INews[] | undefined;
  loading: boolean;
}

export default function NextNews({ news, loading }: IProps) {
  return (
    <>
      <div className={styles.next_news}>
        <PaginationWrapper top bottom>
          <NewsList news={news} loading={loading} />
        </PaginationWrapper>
      </div>
    </>
  );
}
