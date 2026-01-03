import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/ThemeContestProvider";
// import type { CategoriesType, FnChangePage } from "../../interfaces";
// interface IP {
//   changePage: FnChangePage;
//   currentCategory: CategoriesType;
// }
interface IProps {
  children: React.ReactElement;
}

export default function Slider({ children }: IProps) {
  const refSlider = useRef<HTMLDivElement | null>(null);
  const { isDark } = useTheme();
  function handleClickLeft() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft += 150;
  }
  function handleClickRight() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft -= 150;
  }

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={handleClickLeft}>
        {" "}
        {"<"}{" "}
      </button>

      {React.cloneElement(children, { ref: refSlider })}
      <button className={styles.arrow} onClick={handleClickRight}>
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
}
