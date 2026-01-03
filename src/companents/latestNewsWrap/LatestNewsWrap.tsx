import styles from "./styles.module.css";
import LatestNews from "./latestNews/LatestNews";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import { useAppSelector } from "../../store";

export default function LatestNewsWrap() {
  const { isLoading } = useGetLatestNewsQuery(null);
  const news = useAppSelector((state) => state.news.news);
  return (
    <div className={styles.latest_news_wrap}>
      <LatestNews news={news} loading={isLoading} />
    </div>
  );
}
