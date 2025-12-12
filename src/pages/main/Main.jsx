
import NewsBanner from "../../companents/newsBanner/NewsBanner";
import styles from "./styles.module.css";
import NewsList from "../../companents/newsList/NewsList";
import Pagination from "../../companents/pagination/Pagination";
import Categories from "../../companents/categories/Categories";
import Search from "../../companents/search/Search";
import { TOTAL_PAGE, PAGE_SIZE} from "../../constants/constants.js";
import MayProvider from "../../providers/MayProvider.jsx";
import useFetch from "../../helps/useFetch.js";
import { getNews } from "../../api/apiNews.js";
import useFilter from "../../hooks/useRequestFilter.js";


//const NewsContext=createContext([]);
export default function Main() {

 const {requestParam,chengeRequestParam}=useFilter({
  page_number:1,
  page_size:PAGE_SIZE,
  categories:null,
  keywords:'',
 })
 
 const {data,loading}=useFetch(getNews,requestParam);
 const currentPage=data?.page;



 
 //console.log(currentPage); 
 return <main className={styles.main}>
       
      <Categories changePage={chengeRequestParam} currentCategory={requestParam.categories}></Categories>

      <Search handleSearch={chengeRequestParam}></Search>

      <NewsBanner   news={data&&data.news&&data.news[0]} loading={loading}></NewsBanner>

      <Pagination totalPage={TOTAL_PAGE} changePage={chengeRequestParam} currentPage={currentPage}></Pagination>

      <NewsList  news={data?.news} loading={loading}></NewsList>

      <Pagination totalPage={TOTAL_PAGE} changePage={chengeRequestParam} currentPage={currentPage}></Pagination>

  </main>
  
}