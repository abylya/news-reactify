import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { Debuonse } from "../../../../helps/debounse.js";
import { useTheme } from "../../../../contexts/ThemeContestProvider.js";
import { useAppDispatch } from "../../../../store/index.js";
import { setFilter } from "../../../../store/slices/newsSlice";
export default function Search() {
  const [keywords, setKeywords] = useState("");
  const { isDark } = useTheme();
  const debouns = Debuonse(keywords, 1500);
  const dispatch = useAppDispatch();

  function handleKeywords(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setKeywords(value);
  }

  useEffect(() => {
    dispatch(setFilter({ key: "keywords", value: debouns }));
  }, [debouns]);

  return (
    <>
      <div
        className={`${styles.search} ${isDark ? styles.dark : styles.light}`}
      >
        <input
          type="text"
          className={styles.input}
          value={keywords}
          onChange={(e) => handleKeywords(e)}
          placeholder="java Script"
        />
      </div>
    </>
  );
}
