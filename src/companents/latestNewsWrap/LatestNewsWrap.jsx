import styles from "./styles.module.css";
import LatestNews from "./latestNews/LatestNews";
export default function LatestNewsWrap({news,loading}) {

  return<div className={styles.latest_news_wrap}>
          <LatestNews news={news} loading={loading}></LatestNews>
  </div>
  
}