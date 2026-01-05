import type { INews } from "@/shared/interfaces";
import styles from "./styles.module.css";
import NewsItem from "@/entities/news/ui/newsItem/NewsItem";
import withSkiliton from "@/shared/hocs/withSkiliton";
import { PAGE_SIZE } from "@/shared/constants/constants";

interface IPropsList {
  news: INews[] | undefined;
  loading: boolean;
}

function NewsList({ news, loading }: IPropsList) {
  return (
    <div className={styles.news_wrap}>
      {loading && <span></span>}
      <ul className={styles.news_list}>
        {news &&
          news?.map((item) => {
            return <NewsItem key={item.id} news={item}></NewsItem>;
          })}
      </ul>
    </div>
  );
}

const WithSkiliton = withSkiliton<IPropsList>(NewsList, PAGE_SIZE, "colum");
export default WithSkiliton;
