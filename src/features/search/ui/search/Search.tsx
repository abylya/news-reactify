import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/app/appSotre.js";
import { setFilter } from "@/entities/news/model/newsSlice.js";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Debuonse } from "@/shared/helps/debounse";

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
