import { useEffect, useState } from "react";
import NewsBanner from "../../companents/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../companents/newsList/NewsList";

export default function Main() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
     const featch= async () => {
        try {
           const respons=await getNews();
           setNews(respons.news);
           console.log(respons.news);
        } catch (error) {
          console.log(error)
        }
      }
      featch();
  },[])
  return<>
  <main className={styles.main}>
    {news.length>0?<NewsBanner news={news[0]}></NewsBanner>:null}
    <NewsList news={news}></NewsList>
  </main>
  </>
}