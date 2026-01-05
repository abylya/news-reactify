import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appSotre";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import LatestNews from "@/widgets/news/ui/latestNews/LatestNews";

export default function LatestNewsWrap() {
  const { isLoading } = useGetLatestNewsQuery(null);
  const news = useAppSelector((state) => state.news.news);
  return (
    <div className={styles.latest_news_wrap}>
      <LatestNews news={news} loading={isLoading} />
    </div>
  );
}
