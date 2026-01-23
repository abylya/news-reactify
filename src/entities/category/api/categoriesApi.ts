// Need to use the React-specific entry point to import createApi

import type { CategoriesType } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const CategoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: CategoriesType[] }, null>({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: API_KEY,
          },
        };
      },
      // async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;

      //     console.log(data);
      //     if (data) {
      //       dispatch(categoriesSlice.actions.fetchDataSuccess(data.categpries));
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
    }),
  }),
});

export const { useGetCategoriesQuery } = CategoriesApi;
