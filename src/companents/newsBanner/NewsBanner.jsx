import timeAgo from "../../helps/timeAgo.js";
import Image from "../image/Image";
import styles from "./styles.module.css";
import Skiliton from "../skiliton/Skiliton.jsx";
import withSkiliton from "../../hocs/withSkiliton.jsx";

 function NewsBanner({news}) {
  return <>
     <div className={styles.news_banner}>
      <Image image={news?.image}></Image>
      <h3 className={styles.title}>{news?.title}</h3>
      <p className={styles.date}>{timeAgo(news?.published)} by {news?.author}</p>
     </div>
  </>
}
 const WithSkiliton=withSkiliton(NewsBanner,1);

 export default WithSkiliton;