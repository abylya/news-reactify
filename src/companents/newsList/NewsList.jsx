import NewsItem from "../newsItem/NewsItem";

import styles from "./styles.module.css";
export default function NewsList({news}) {
  return <>
     <ul className={styles.news_list}>
      {news.map((item)=>{
        return <NewsItem key={item.title} news={item}></NewsItem>
      })}
     </ul>
  </>
}