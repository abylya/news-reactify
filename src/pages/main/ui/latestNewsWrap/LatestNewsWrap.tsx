import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";

export default function LatestNewsWrap() {
  const { isLoading, data } = useGetLatestNewsQuery(null);
  // const news = useAppSelector((state) => state.news.news);
  return (
    <div className={styles.latest_news_wrap}>
      {data && (
        <NewsList
          news={data.news}
          loading={isLoading}
          type={"bunner"}
          direction={"row"}
        />
      )}
    </div>
  );
}
