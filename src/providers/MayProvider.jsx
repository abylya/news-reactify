import { useState } from "react";
import { NewsContext } from "../contexts/newsContext";
import { PAGE_SIZE } from "../constants/constants";
import { Debuonse } from "../helps/Debounse";
import useFetch from "../helps/useFetch";
import { getNews } from "../api/apiNews";
import { TOTAL_PAGE } from "../constants/constants.js";
import styles from "./styles.module.css";
export default function MayProvider({children}) {
  
const[filterParam,setFilterParam]=useState({
                                            page_number:1,
                                            page_size:PAGE_SIZE,
                                            category:'All',
                                            keywords:'',
                                          });


 const[keywords,setKeywords]=useState('');
//  function handleNextPage() {
//    if(filterParam.page_number<TOTAL_PAGE) {
//     setCurrentPage((n)=>n+1)
//     chengeFilter('page_number',currentPage+1);
//   };
//  }
 const debValue=Debuonse(keywords,1500);

function chengeFilter(key,value) {
  setFilterParam((prev)=>{return{...prev,[key]:value,keywords:debValue}});
}

const fetchedNews=useFetch(getNews,filterParam,'news');
console.log(fetchedNews?.data?.length);
//console.log(fetchedNews);
    return<>
    
    <div  className={styles.main}>
      
           {fetchedNews&&<NewsContext value={{fetch:fetchedNews,chengKeywords:setKeywords,currentPage:filterParam.page_number,setPage:chengeFilter}}> {children}</NewsContext>}
      
    </div>    
    </>
    

}