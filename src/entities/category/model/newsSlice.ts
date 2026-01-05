import { PAGE_SIZE } from "@/shared/constants/constants";
import type { IFiltersNews } from "@/shared/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CategoriesType } from "./types";

interface State {
  categories: CategoriesType[];
  setCategory: IFiltersNews;
}

const initialState: State = {
  categories: [],
  setCategory: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  },
};

export const categoriesSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesType[]>) => {
      state.categories = action.payload;
    },
    setCategory: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;

      state.setCategory = { ...state.setCategory, [key]: value };
    },
  },
});

export const { setCategories, setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
