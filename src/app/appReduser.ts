import { newsApi } from "@/entities/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReduser from "@/entities/news/model/newsSlice";
import categoriesReduser from "@/entities/category/model/cotegoriesSlice";
import { CategoriesApi } from "@/entities/category/api/categoriesApi";

export const rootReduser = combineReducers({
  news: newsReduser,
  categories: categoriesReduser,
  [newsApi.reducerPath]: newsApi.reducer,
  [CategoriesApi.reducerPath]: CategoriesApi.reducer,
});
