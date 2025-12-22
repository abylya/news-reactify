import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { Debuonse } from "../../../../helps/debounse.js";
import type { FnChangePage } from "../../../../interfaces/index.js";
import { useTheme } from "../../../../contexts/ThemeContestProvider.js";

interface IProps {
  changePage: FnChangePage;
}

export default function Search({ changePage }: IProps) {
  const [keywords, setKeywords] = useState("");
  const { isDark } = useTheme();
  const debouns = Debuonse(keywords, 1500);
  //console.log(debouns);
  function handleKeywords(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setKeywords(value);
  }

  useEffect(() => {
    changePage("keywords", debouns);
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
