import { useState } from "react";
import type { IFiltersNews} from "../interfaces";


export default function useFilter(init:IFiltersNews) {
  const[requestParam,setFilter]=useState<IFiltersNews>(init);

function chengeRequestParam(key:string,value:string|number|null){
  setFilter((prev)=> {return {...prev,[key]:value}});
}

return {requestParam,chengeRequestParam}
}