export interface INews{
author:string; 
category: CategoriesType[];
description: string;
id:string;
image: string;
language: string;
published: string;
title:string; 
url:string; 
}

export interface IFiltersNews{
  page_number:number;
  page_size:number;
  category:CategoriesType;
  keywords:string;
}


export interface useFetchRez<T>{
  data:T|undefined,
  loading:boolean,
  error:string|null,
}


export type FnChangePage=(k:string,v:CategoriesType|string|number|null)=>void;

export type ParamsType=Partial<IFiltersNews>;
export interface IResponsNews{
  news: INews[]|undefined; page: number; status: string 
}
export interface IResponsCategories{
  categories: CategoriesType[]; discription:string; status: string 
}



export type CategoriesType= |
  "regional"|
  "technology"|
  "lifestyle"|
  "business"|
  "general"|
  "programming"|
  "science"|
  "entertainment"|
  "world"|
  "sports"|
  "finance"|
  "academia"|
  "politics"|
  "health"|
  "opinion"|
  "food"|
  "game"|
  "fashion"|
  "academic"|
  "crap"|
  "travel"|
  "culture"|
  "economy"|
  "environment"|
  "art"|
  "music"|
  "notsure"|
  "CS"|
  "education"|
  "redundant"|
  "television"|
  "commodity"|
  "movie"|
  "entrepreneur"|
  "review"|
  "auto"|
  "energy"|
  "celebrity"|
  "medical"|
  "gadgets"|
  "design"|
  "EE"|
  "security"|
  "mobile"|
  "estate"|
  "funny"|'All';
