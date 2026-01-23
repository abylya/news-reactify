// Need to use the React-specific entry point to import createApi
import type { IFiltersNews, IResponsNews } from "../index.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { newsSlice } from "../model/newsSlice.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<IResponsNews | undefined, IFiltersNews>({
      keepUnusedDataFor: 0,
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
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(newsSlice.actions.setLoading());
            dispatch(newsSlice.actions.setNews(data.news));
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
