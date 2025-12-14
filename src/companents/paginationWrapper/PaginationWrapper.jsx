import Pagination from "../nextNewsWrapper/nextNews/pagination/Pagination";


export default function PaginationWrapper({top,bottom,children,...paginationProps}) {
  return<>
  {top&&<Pagination {...paginationProps}></Pagination>}
    {children}
  {bottom&&<Pagination {...paginationProps}></Pagination>}
  
  </>
  
}