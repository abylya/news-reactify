import type { INews } from "@/shared/interfaces";
import styles from "./styles.module.css";
import NewsItem from "@/entities/news/ui/newsItem/NewsItem";
import withSkiliton from "@/shared/hocs/withSkiliton";
import { PAGE_SIZE } from "@/shared/constants/constants";
import type { T_type } from "@/entities/news";

interface IPropsList {
  news: INews[] | undefined;
  loading: boolean;
  type?: T_type;
  direction?: string;
}

function NewsList({ news, loading, type, direction }: IPropsList) {
  return (
    <ul
      className={`${styles.news_list}  ${
        direction === "column" ? styles.column : styles.row
      }`}
    >
      {loading && <span></span>}
      {news?.map((item) => {
        return <NewsItem key={item.id} news={item} type={type}></NewsItem>;
      })}
    </ul>
  );
}

const WithSkiliton = withSkiliton<IPropsList>(NewsList, PAGE_SIZE);
export default WithSkiliton;
