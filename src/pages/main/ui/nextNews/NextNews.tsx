import Pagination from "@/features/pagination/ui/pagination/Pagination";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news/ui";
import type { INews } from "@/entities/news";

interface IProps {
  news: INews[] | undefined;
  loading: boolean;
}

export default function NextNews({ news, loading }: IProps) {
  return (
    <>
      <div className={styles.next_news}>
        <Pagination top bottom>
          <NewsList news={news} loading={loading} />
        </Pagination>
      </div>
    </>
  );
}
