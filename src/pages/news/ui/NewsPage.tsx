import { useAppSelector } from "@/app/appSotre";
import styles from "./styles.module.css";
import { Link } from "react-router";
import timeAgo from "@/shared/helps/timeAgo";

export default function NewsPage() {
  const news = useAppSelector((state) => state.news.newsPage);
  if (news === null) {
    return (
      <div className={styles.errBlock}>
        <h1>No content</h1>
        <Link to={"/"}>
          <p>go houme</p>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.mainPage}>
      <h1 className={styles.title}>{news?.title}</h1>
      <div className={styles.content}>
        <div className={styles.imgBlock}>
          {news && <img src={news.image} alt="" />}
        </div>
        <div className={styles.discription}>
          <p>{news.description} </p>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            to news
          </a>{" "}
          <span>{news.language}</span>
          <p className={styles.extra}>{timeAgo(news.published)}</p>
        </div>
        <div className={styles.categoryBlock}>
          {news.category.map((item) => (
            <span key={item} className={styles.category}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
