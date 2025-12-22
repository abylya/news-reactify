import styles from "./styles.module.css";
import NewsBanner from "./newsBanner/NewsBanner";
import { PAGE_SIZE } from "../../../constants/constants";
import withSkiliton from "../../../hocs/withSkiliton";
import type { INews } from "../../../interfaces";

interface IProps {
  news?: INews[];
  loading: boolean;
}
function LatestNews({ news, loading }: IProps) {
  return (
    <div className={styles.latest_news}>
      {loading && <span></span>}
      <ul className={styles.news_list}>
        {news?.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <NewsBanner news={item}></NewsBanner>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const WithSkiliton = withSkiliton(LatestNews, PAGE_SIZE, "row");
export default WithSkiliton;
