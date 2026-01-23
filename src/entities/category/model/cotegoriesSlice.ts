import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CategoriesType } from "./types";

interface State {
  categories: CategoriesType[];
  currentCategory: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: State = {
  categories: [],
  currentCategory: "",
  status: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "CategoriesApi",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.status = "loading";
    },
    fetchDataSuccess: (state, action: PayloadAction<CategoriesType[]>) => {
      state.categories = action.payload;
      state.status = "succeeded";
      state.error = null;
      console.log("dispatch categ ");
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
