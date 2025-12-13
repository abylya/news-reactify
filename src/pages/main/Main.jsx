
import styles from "./styles.module.css";
import { TOTAL_PAGE, PAGE_SIZE} from "../../constants/constants.js";
import { getNews } from "../../api/apiNews.js";
import useFilter from "../../hooks/useRequestFilter.js";
import NextNewsWrapper from "../../companents/nextNewsWrapper/NextNewsWrapper";
import useFetch from "../../helps/useFetch.js";
import LatestNewsWrap from "../../companents/latestNewsWrap/latestNewsWrap.jsx";


//const NewsContext=createContext([]);
export default function Main() {

 const {requestParam,chengeRequestParam}=useFilter({
  page_number:1,
  page_size:PAGE_SIZE,
  category:null,
  keywords:'',
 })
 
 const {data,loading}=useFetch(getNews,requestParam);
 const currentPage=data?.page;



 
 //console.log(currentPage); 
 return <main className={styles.main}>

      <LatestNewsWrap news={data&&data.news} loading={loading}></LatestNewsWrap>

      <NextNewsWrapper changePage={chengeRequestParam} currentCategory={requestParam.category}  currentPage={currentPage} news={data?.news} loading={loading}></NextNewsWrapper>
       
  </main>
  
}