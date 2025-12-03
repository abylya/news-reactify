import { useEffect, useState } from "react";
import NewsBanner from "../../companents/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../companents/newsList/NewsList";

export default function Main() {
  const [news,setNews]=useState([]);
 const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  useEffect(()=>{
  
     const featch= async () => {
        try {
           setLoading(true);
           const respons=await getNews();
           setNews(respons.news);
           console.log(respons.news);
        } catch (err) {
          setError(err.message);
          console.log(error);
        } finally {
      setLoading(false);
    }
      }
      featch();
  },[]);
  if(loading) return <p>....зарузка</p>
  return<>
  <main className={styles.main}>
    {news.length>0?<NewsBanner news={news[0]}></NewsBanner>:null}
    <NewsList news={news}></NewsList>
  </main>
  </>
}