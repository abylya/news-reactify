import { useState } from "react";


export default function useFilter(init) {
  const[requestParam,setFilter]=useState(init);

function chengeRequestParam(key,value){
  setFilter((prev)=> {return {...prev,[key]:value}});
}

return {requestParam,chengeRequestParam}
}