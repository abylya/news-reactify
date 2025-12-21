import timeAgo from "../../../../helps/timeAgo.ts";
import type { INews } from "../../../../interfaces/index.ts";
import styles from "./styles.module.css";
interface IProps {
  news: INews;
}
export default function NewsItem({ news }: IProps) {
  return (
    <>
      <li key={news.id} className={styles.news_item}>
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${news.image})` }}
        ></div>
        <div className={styles.info}>
          <h3 className={styles.title}>{news.title}</h3>
          <p className={styles.extra}>{timeAgo(news.published)}</p>
        </div>
      </li>
    </>
  );
}
