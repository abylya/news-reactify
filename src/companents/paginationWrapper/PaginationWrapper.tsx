import type { FnChangePage } from "../../interfaces";
import Pagination from "../nextNewsWrapper/nextNews/pagination/Pagination";

interface IProps {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
  changePage: FnChangePage;
  currentPage: number;
}
export default function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: IProps) {
  return (
    <>
      {top && <Pagination {...paginationProps}></Pagination>}
      {children}
      {bottom && <Pagination {...paginationProps}></Pagination>}
    </>
  );
}
