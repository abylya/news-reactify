import axios from "axios";
import type { IFiltersNews, IResponsNews, IResponsCategories} from "../interfaces";


const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY=import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(params?:IFiltersNews):Promise<IResponsNews> {
  try {
    // params=params!==null?params:{
    //   page_number=1,
    //   page_size=10,
    //   category,
    //   keywords,
    // } 

      const respons=await axios.get<IResponsNews>(`${BASE_URL}search`,{params:{
        // apiKey:API_KEY,page_number,page_size,category,keywords,
         apiKey:API_KEY,...params,
      }});
        return respons?.data;
      
  } catch (error) {
    
       if (axios.isAxiosError(error)) {
      throw new Error(`Ошибка ${error.response?.status}: ${error.response?.data.message}`);
    }
    throw new Error('Ошибка сети');
    
  }
}

export async function getCategories():Promise<IResponsCategories> {

    try {
      const respons=await axios.get<IResponsCategories>(`${BASE_URL}available/categories`,{params:{
        apiKey:API_KEY,
      }});
    
      return respons?.data;
      
  } catch (error) {
       if (axios.isAxiosError(error)) {
      throw new Error(`Ошибка ${error.response?.status}: ${error.response?.data.message}`);
    }
    throw new Error('Ошибка сети');
    //return {page:1,news:[],status:'error'}
    
  }
  
}


export async function getLatestList():Promise<IResponsNews> {
  try {
      const respons=await axios.get<IResponsNews>(`${BASE_URL}latest-news`,{params:{
        apiKey:API_KEY,page_size:15, 
      }});
      
      return respons.data;
  } catch (error) {
       if (axios.isAxiosError(error)) {
      throw new Error(`Ошибка ${error.response?.status}: ${error.response?.data.message}`);
    }
    throw new Error('Ошибка сети');
    
  }
}