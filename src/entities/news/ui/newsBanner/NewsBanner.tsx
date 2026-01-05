import styles from "./styles.module.css";
import type { INews } from "../../index";
import Image from "@/shared/ui/image/Image";
import timeAgo from "@/shared/helps/timeAgo";

interface IProps {
  news: INews;
}
export default function NewsBanner({ news }: IProps) {
  return (
    <>
      <div className={styles.news_banner}>
        <Image image={news?.image}></Image>
        <h3 className={styles.title}>{news?.title}</h3>
        <p className={styles.date}>
          {timeAgo(news?.published)} by {news?.author}
        </p>
      </div>
    </>
  );
}
