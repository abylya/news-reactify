import React, { useRef, type ReactElement } from "react";
import styles from "./styles.module.css";

interface IProps {
  children: ReactElement<{ sliderRef?: React.Ref<HTMLUListElement> }>; // указываем, что children может принимать prop sliderRef
}

export default function Slider({ children }: IProps) {
  const refSlider = useRef<HTMLUListElement | null>(null);
  function handleClickLeft() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft += 150;
  }
  function handleClickRight() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft -= 150;
  }
  return (
    <div className={styles.slider}>
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
