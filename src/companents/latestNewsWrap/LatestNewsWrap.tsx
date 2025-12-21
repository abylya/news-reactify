import styles from "./styles.module.css";
import LatestNews from "./latestNews/LatestNews";
import { getLatestList } from "../../api/apiNews";
import useFetch from "../../helps/useFetch";
import type { IResponsNews } from "../../interfaces";

export default function LatestNewsWrap() {
  const { data, loading } = useFetch<IResponsNews, null>(getLatestList);

  return (
    <div className={styles.latest_news_wrap}>
      <LatestNews news={data?.news} loading={loading} />
    </div>
  );
}
