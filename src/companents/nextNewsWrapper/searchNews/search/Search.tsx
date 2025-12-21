import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { Debuonse } from "../../../../helps/debounse.js";
import type { FnChangePage } from "../../../../interfaces/index.js";

interface IProps {
  changePage: FnChangePage;
}

export default function Search({ changePage }: IProps) {
  const [keywords, setKeywords] = useState("");

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
      <div className={styles.search}>
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
