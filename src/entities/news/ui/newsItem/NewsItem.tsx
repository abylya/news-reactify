import timeAgo from "@/shared/helps/timeAgo";
import styles from "./styles.module.css";
import type { INews, T_type } from "../../index";
import Image from "@/shared/ui/image/Image";
interface IProps {
  news: INews;
  type?: T_type;
}
export default function NewsItem({ news, type = "item" }: IProps) {
  return (
    <>
      <li
        key={news.id}
        className={`${styles.item}  ${type === "bunner" && styles.item_bunner}`}
      >
        {type === "bunner" ? (
          <Image image={news?.image}></Image>
        ) : (
          <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${news.image})` }}
          ></div>
        )}
        <div className={styles.info}>
          <h3 className={styles.title}>{news.title}</h3>
          <p className={styles.extra}>{timeAgo(news.published)}</p>
        </div>
      </li>
    </>
  );
}
