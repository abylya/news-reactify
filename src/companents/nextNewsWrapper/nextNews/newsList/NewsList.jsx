import NewsItem from "../newsItem/NewsItem";
import styles from "./styles.module.css";
import {COUNT_NEWS} from "../../../../constants/constants/";
import withSkiliton from "../../../../hocs/withSkiliton";
  function NewsList({news,loading}) {
 
  return <div className={styles.news_wrap}>

     <ul className={styles.news_list}>
      {news&&news?.map((item,index)=>{
       if(index>=COUNT_NEWS) return <NewsItem key={item.id} news={item} loading={loading}></NewsItem>
      })}
     </ul>

  </div>
}

  const WithSkiliton=withSkiliton(NewsList,COUNT_NEWS,'colum');
  export default WithSkiliton;
  