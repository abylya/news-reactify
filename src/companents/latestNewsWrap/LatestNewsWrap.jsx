import styles from "./styles.module.css";
import LatestNews from "./latestNews/LatestNews";
import { getLatestList } from "../../api/apiNews";
import useFetch from "../../helps/useFetch";


export default function LatestNewsWrap() {
const {data,loading}=useFetch(getLatestList);

  return<div className={styles.latest_news_wrap}>
          <LatestNews news={data?.data.news} loading={loading}></LatestNews>
  </div>
  
}