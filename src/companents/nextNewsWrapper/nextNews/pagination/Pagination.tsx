import styles from "./styles.module.css";
import { TOTAL_PAGE } from "../../../../constants/constants";
import type { FnChangePage } from "../../../../interfaces";
import { useTheme } from "../../../../contexts/ThemeContestProvider";

interface IProps {
  changePage: FnChangePage;
  currentPage: number;
}
export default function Pagination({ changePage, currentPage }: IProps) {
  const { isDark } = useTheme();
  const prevNews = currentPage - 1;
  const nextNews = currentPage + 1;
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        className={styles.btn_previos}
        onClick={() => changePage("page_number", prevNews)}
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
                onClick={() => changePage("page_number", page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.btn_next}
        onClick={() => changePage("page_number", nextNews)}
        disabled={currentPage >= TOTAL_PAGE}
      >
        {">"}
      </button>
    </div>
  );
}
