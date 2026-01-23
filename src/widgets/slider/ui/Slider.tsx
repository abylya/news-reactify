import React, { useRef } from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactElement;
  isDark: boolean;
  step: number;
}

export default function Slider({ children, step, isDark }: IProps) {
  const refSlider = useRef<HTMLDivElement | null>(null);
  function handleClickLeft() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft += step;
  }
  function handleClickRight() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft -= step;
  }
  //const child = React.Children.only(children);
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={handleClickLeft}>
        {" "}
        {"<"}{" "}
      </button>
      {/* {React.cloneElement(children, {
        ref: refSlider,
      })} */}
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          // передаём ref в ребёнка
          ref: refSlider,
        } as React.RefAttributes<HTMLDivElement>)}

      <button className={styles.arrow} onClick={handleClickRight}>
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
}
