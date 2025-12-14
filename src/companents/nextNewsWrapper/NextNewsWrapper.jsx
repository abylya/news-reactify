
import styles from "./styles.module.css";
import NextNews from "./nextNews/NextNews";
import SearchNews from "./searchNews/SearchNews";
import { PAGE_SIZE } from "../../constants/constants";
import useFilter from "../../hooks/useRequestFilter";
import { getNews } from "../../api/apiNews";
import useFetch from "../../helps/useFetch";

export default function NextNewsWrapper() {
   const {requestParam,chengeRequestParam}=useFilter({
    page_number:1,
    page_size:PAGE_SIZE,
    category:null,
    keywords:'',
   })
   
   const {data,loading}=useFetch(getNews,requestParam);
   const currentPage=data?.page;

  return <>
    <div className={styles.news_wrapper}>
      <SearchNews currentCategory={requestParam.category} changePage={chengeRequestParam}></SearchNews>
      <NextNews news={data?.news} currentPage={currentPage} loading={loading} changePage={chengeRequestParam}></NextNews>
    </div>
  </>
}