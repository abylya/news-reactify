import type { INews } from "@/entities/news";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";
import { useAppDispatch } from "@/app/appSotre";
import { useNavigate } from "react-router";
import { setNewsPage } from "@/entities/news/model/newsSlice";

export default function LatestNewsWrap() {
  const { isLoading, data } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function navigetTo(news: INews) {
    dispatch(setNewsPage(news));
    navigate(`/news/${news.id}`);
  }

  return (
    <div className={styles.latest_news_wrap}>
      {data && (
        <NewsList
          news={data.news}
          loading={isLoading}
          type={"bunner"}
          direction={"row"}
          viewNewsSlot={(news: INews) => (
            <p onClick={() => navigetTo(news)}>show more</p>
          )}
        />
      )}
    </div>
  );
}
