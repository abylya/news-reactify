import Pagination from "../nextNewsWrapper/nextNews/pagination/Pagination";

interface IProps {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
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
