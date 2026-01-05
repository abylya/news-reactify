import LatestNewsWrap from "./latestNewsWrap/LatestNewsWrap";
import NextNewsWrapper from "./nextNewsWrapper/NextNewsWrapper";
import styles from "./styles.module.css";

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
