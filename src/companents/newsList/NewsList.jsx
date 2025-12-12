import NewsItem from "../newsItem/NewsItem";
import styles from "./styles.module.css";
import {PAGE_SIZE} from "../../constants/constants.js";
import { NewsContext } from "../../contexts/newsContext.js";
import Skiliton from "../skiliton/Skiliton.jsx";
 export default function NewsList({news}) {
  
  //console.log(news);
 
  return <>
     <ul className={styles.news_list}>
      {news&&news?.map((item)=>{
        return <NewsItem key={item.id} news={item}></NewsItem>
      })}
     </ul>
  </>
}

  
  