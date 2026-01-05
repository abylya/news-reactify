import PaginationButton from "../paginationButton/PaginationButton";

interface IProps {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
}
export default function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: IProps) {
  return (
    <>
      {top && <PaginationButton {...paginationProps}></PaginationButton>}
      {children}
      {bottom && <PaginationButton {...paginationProps}></PaginationButton>}
    </>
  );
}
