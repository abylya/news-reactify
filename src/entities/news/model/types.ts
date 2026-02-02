import type { CategoriesType } from "@/shared/interfaces";

export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export type T_type = "bunner" | "item";

export interface IFiltersNews {
  page_number: number;
  page_size: number;
  category?: CategoriesType;
  keywords?: string;
  language: string;
}

export interface IResponsNews {
  news: INews[];
  page: number;
  status: string;
}
