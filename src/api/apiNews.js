import axios from "axios";

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY=import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(page_number=1,page_size=10) {
  try {
      const respons=await axios.get(`${BASE_URL}search`,{params:{
        apiKey:API_KEY,
        page_number:page_number,
        page_size:page_size,
      }})
      return respons.data;
  } catch (error) {
       if (error.response) {
      throw new Error(`Ошибка ${error.response.status}: ${error.response.data.message}`);
    }
    throw new Error('Ошибка сети');
    
  }
}