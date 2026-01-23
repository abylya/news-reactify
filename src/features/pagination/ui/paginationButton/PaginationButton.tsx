import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
interface I_props {
  page: number;
  chengePage: (num: number) => void;
  totalPage: number;
}
export default function PaginationButton({
  page,
  chengePage,
  totalPage,
}: I_props) {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        className={styles.btn_previos}
        onClick={() => chengePage(page - 1)}
        disabled={page <= 1}
      >
        {"<"}
      </button>
      <ul className={styles.list_page}>
        {[...Array(totalPage)].map((_, index) => {
          const pageBtn = index + 1;
          const bool = pageBtn === page;
          return (
            <li key={index}>
              <button
                className={bool ? styles.btn_action : styles.btn_page}
                disabled={bool}
                onClick={() => chengePage(pageBtn)}
              >
                {pageBtn}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.btn_next}
        onClick={() => chengePage(page + 1)}
        disabled={page >= totalPage}
      >
        {">"}
      </button>
    </div>
  );
}
