import  timeAgo  from "../../helps/timeAgo.js";

import styles from "./styles.module.css";
export default function NewsItem({news}) {
  return <>
     <li key={news.id} className={styles.news_item}>
      <div className={styles.wrapper} style={{backgroundImage:`url(${news.image})`}}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.extra}>{timeAgo(news.published)}</p>
      </div>

     </li>
  </>
}