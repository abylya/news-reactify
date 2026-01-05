import { newsApi } from "@/entities/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReduser from "@/entities/news/model/newsSlice";
import { CategoriesApi } from "@/entities/category/api/categoriesApi";

export const rootReduser = combineReducers({
  news: newsReduser,
  [newsApi.reducerPath]: newsApi.reducer,
  [CategoriesApi.reducerPath]: CategoriesApi.reducer,
});
