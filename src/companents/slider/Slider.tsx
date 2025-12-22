import React, { useRef, type ReactElement } from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/ThemeContestProvider";

interface IProps {
  children: ReactElement<{ sliderRef?: React.Ref<HTMLUListElement> }>; // указываем, что children может принимать prop sliderRef
}

export default function Slider({ children }: IProps) {
  const refSlider = useRef<HTMLUListElement | null>(null);
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
      {React.cloneElement(children, { sliderRef: refSlider })}
      <button className={styles.arrow} onClick={handleClickRight}>
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
}
