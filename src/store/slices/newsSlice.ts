import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CategoriesType, IFiltersNews, INews } from "../../interfaces";
import { PAGE_SIZE } from "../../constants/constants";

// Define a type for the slice state
interface State {
  news: INews[];
  filters: IFiltersNews;
}

// Define the initial state using that type
const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilter } = newsSlice.actions;

export default newsSlice.reducer;
