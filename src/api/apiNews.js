import axios from "axios";

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY=import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(params) {
  try {
      const respons=await axios.get(`${BASE_URL}search`,{params:{
        apiKey:API_KEY,...params
        // page_number:page_number,
        // page_size:page_size,
        // category:category,
      }})
      return respons.data;
  } catch (error) {
       if (error.response) {
      throw new Error(`Ошибка ${error.response.status}: ${error.response.data.message}`);
    }
    throw new Error('Ошибка сети');
    
  }
}

export async function getCategories() {

    try {
      const respons=await axios.get(`${BASE_URL}available/categories`,{params:{
        apiKey:API_KEY,
        
      }})
      return respons.data;
  } catch (error) {
       if (error.response) {
      throw new Error(`Ошибка ${error.response.status}: ${error.response.data.message}`);
    }
    throw new Error('Ошибка сети');
    
  }
  
}