import { useEffect, useState } from "react";
import NewsBanner from "../../companents/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../companents/newsList/NewsList";
import Skiliton from "../../companents/skiliton/Skiliton";
import Pagination from "../../companents/pagination/Pagination";

export default function Main() {
  const [news,setNews]=useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const[currentPage,setCurrentPage]=useState(1);
 const pageSize=10;
 const totalPage=10;
 
 function handleNextPage() {
   if(currentPage<totalPage) setCurrentPage((n)=>n+1);
 }
 function handlePreviosPage() {
   if(currentPage>1) setCurrentPage((n)=>n-1);
 }

 function handleClickPage(numberPage) {
    setCurrentPage(numberPage);
 }
 const fetchNews = async (isMounted,currentPage) => {
   try {
     setLoading(true);
     const response = await getNews(currentPage,pageSize);
     
     if (isMounted) {
       setNews(response.news);
       //console.log(response.news);
     }
   } catch (err) {
     if (isMounted) {
       setError(err.message);
       console.log(error);
     }
   } finally {
     if (isMounted) {
       setLoading(false);
     }
   }
 };
  useEffect(()=>{
  let isMounted = true;
  
  fetchNews(isMounted,currentPage);

  return () => {
    isMounted = false;
  };
  },[currentPage]);
 
  
 return <main className={styles.main}>
    {news.length>0 && !loading?<NewsBanner news={news[0]}></NewsBanner>:<Skiliton count={1}></Skiliton>}
    <Pagination totalPage={totalPage} handleNextPage={handleNextPage} handlePreviosPage={handlePreviosPage} handleClickPage={handleClickPage} currentPage={currentPage}></Pagination>
    {news.length>0 && !loading?<NewsList news={news}></NewsList>:<Skiliton count={10}></Skiliton>}
    <Pagination totalPage={totalPage} handleNextPage={handleNextPage} handlePreviosPage={handlePreviosPage} handleClickPage={handleClickPage} currentPage={currentPage}></Pagination>
  </main>
  
}