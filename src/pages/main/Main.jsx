import { useEffect, useState } from "react";
import NewsBanner from "../../companents/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../companents/newsList/NewsList";
import Skiliton from "../../companents/skiliton/Skiliton";

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
 
  return<>
  <main className={styles.main}>
    {news.length>0 && !loading?<NewsBanner news={news[0]}></NewsBanner>:<Skiliton count={1}></Skiliton>}
    {news.length>0 && !loading?<NewsList news={news}></NewsList>:<Skiliton count={10}></Skiliton>}
  </main>
  </>
}