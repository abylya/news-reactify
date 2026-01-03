// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IFiltersNews,
  IResponsCategories,
  IResponsNews,
} from "../../interfaces";
import { setNews } from "../slices/newsSlice";
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<IResponsNews, IFiltersNews>({
      query: (params) => {
        return {
          url: "search",
          params: {
            apiKey: API_KEY,
            ...params,
          },
        };
      },
    }),
    getLatestNews: builder.query<IResponsNews, null>({
      query: () => {
        return {
          url: "latest-news",
          params: {
            apiKey: API_KEY,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const rez = await queryFulfilled;
        const data = rez.data;
        if (data.news) {
          dispatch(setNews(data.news));
        }
      },
    }),
    getCategories: builder.query<IResponsCategories, null>({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } =
  newsApi;
