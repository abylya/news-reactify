import NewsItem from "../newsItem/NewsItem.tsx";
import styles from "./styles.module.css";
import { PAGE_SIZE } from "../../../../constants/constants.ts";
import withSkiliton from "../../../../hocs/withSkiliton";
import type { INews } from "../../../../interfaces/index.ts";

interface IPropsList {
  news: INews[] | undefined;
  loading: boolean;
}

function NewsList({ news, loading }: IPropsList) {
  return (
    <div className={styles.news_wrap}>
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
