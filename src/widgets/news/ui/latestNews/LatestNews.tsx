import type { INews } from "@/shared/interfaces";
import styles from "./styles.module.css";
import NewsBanner from "@/entities/news/ui/newsBanner/NewsBanner";
import withSkiliton from "@/shared/hocs/withSkiliton";
import { PAGE_SIZE } from "@/shared/constants/constants";

interface IProps {
  news: INews[];
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
