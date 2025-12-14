import styles from "./styles.module.css";
import NewsBanner from './newsBanner/NewsBanner';
import { COUNT_NEWS } from "../../../constants/constants";
import withSkiliton from "../../../hocs/withSkiliton";
 function LatestNews({news,loading}){
   
    return <div className={styles.latest_news}>
              <ul className={styles.news_list}>
                {news?.map((item,index)=>{
                  if(index<COUNT_NEWS) return <li key={item.id} className={styles.item}><NewsBanner  loading={loading} news={item}></NewsBanner></li>
                })}
              </ul>
            </div>
}
const WithSkiliton=withSkiliton(LatestNews,COUNT_NEWS,'row');
export default WithSkiliton;