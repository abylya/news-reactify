import styles from "./styles.module.css";
import LatestNews from "./latestNews/LatestNews";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

export default function LatestNewsWrap() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <div className={styles.latest_news_wrap}>
      <LatestNews news={data?.news} loading={isLoading} />
    </div>
  );
}
