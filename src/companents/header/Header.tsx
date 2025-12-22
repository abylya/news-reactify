import { themeIcon } from "../../assets";
import { useTheme } from "../../contexts/ThemeContestProvider";
import { formatDate } from "../../helps/formatDate";
import styles from "./styles.module.css";

export default function Header() {
  // const { isDark, toggleTheme } = useTheme();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
      >
        <div className={styles.info}>
          <h1 className={styles.title}>React News</h1>
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
