import PaginationButton from "../paginationButton/PaginationButton";
import { setFilter } from "@/entities/news/model/newsSlice";
import { useAppDispatch, useAppSelector } from "@/app/appSotre";

interface I_props {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
}
export default function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: I_props) {
  const { page_number, page_size } = useAppSelector(
    (state) => state.news.filters,
  );
  const dispatch = useAppDispatch();
  function handlePage(page: number) {
    dispatch(setFilter({ key: "page_number", value: page }));
  }
  return (
    <>
      {top && (
        <PaginationButton
          page={page_number}
          chengePage={handlePage}
          {...paginationProps}
          totalPage={page_size}
        ></PaginationButton>
      )}
      {children}
      {bottom && (
        <PaginationButton
          page={page_number}
          chengePage={handlePage}
          {...paginationProps}
          totalPage={page_size}
        ></PaginationButton>
      )}
    </>
  );
}
