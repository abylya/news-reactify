import styles from "./styles.module.css";
import NextNewsWrapper from "../../companents/nextNewsWrapper/NextNewsWrapper";
import LatestNewsWrap from "../../companents/latestNewsWrap/LatestNewsWrap";

//const NewsContext=createContext([]);
export default function Main() {
  //console.log(currentPage);
  return (
    <main className={styles.main}>
      <LatestNewsWrap></LatestNewsWrap>

      <NextNewsWrapper></NextNewsWrapper>
    </main>
  );
}
