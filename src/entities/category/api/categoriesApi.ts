// Need to use the React-specific entry point to import createApi
import type { IResponsCategories } from "../index.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const CategoriesApi = createApi({
  reducerPath: "CategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
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

export const { useGetCategoriesQuery } = CategoriesApi;
