import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { formatDate } from "@/shared/helps/formatDate";
import { themeIcon } from "@/shared/assets";
import { Link } from "react-router";

export default function Header() {
  // const { isDark, toggleTheme } = useTheme();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
      >
        <div className={styles.info}>
          <Link to={"/"}>
            <h1 className={styles.title}>React News</h1>
          </Link>
          <p>{formatDate(new Date())}</p>
        </div>
        <div className={styles.userBlock}>
          <img
            src={isDark ? themeIcon.sun : themeIcon.moon}
            width={30}
            alt="theme"
            onClick={toggleTheme}
          />
        </div>
      </header>
    </>
  );
}
