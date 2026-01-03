import styles from "./styles.module.css";
import { TOTAL_PAGE } from "../../../../constants/constants";
import { useTheme } from "../../../../contexts/ThemeContestProvider";
import { useAppDispatch } from "../../../../store";
import { setFilter } from "../../../../store/slices/newsSlice";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();
  function handlePage(page: number) {
    setCurrentPage(page);
    dispatch(setFilter({ key: "page_number", value: page }));
  }
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        className={styles.btn_previos}
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <ul className={styles.list_page}>
        {[...Array(TOTAL_PAGE)].map((_, index) => {
          const page = index + 1;
          const bool = currentPage === page;
          return (
            <li key={index}>
              <button
                className={bool ? styles.btn_action : styles.btn_page}
                disabled={bool}
                onClick={() => handlePage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.btn_next}
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage >= TOTAL_PAGE}
      >
        {">"}
      </button>
    </div>
  );
}
