import { PAGE_SIZE } from "@/shared/constants/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFiltersNews, INews } from "./types";

interface State {
  news: INews[];
  filters: IFiltersNews;
  loading: boolean;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "",
    keywords: "",
    language: "us",
  },
  loading: true,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload;

      state.filters = { ...state.filters, [key]: value };
    },
    setLoading(state) {
      state.loading = false;
    },
  },
});

export const { setNews, setFilter, setLoading } = newsSlice.actions;

export default newsSlice.reducer;
