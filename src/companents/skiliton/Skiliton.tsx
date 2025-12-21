import styles from "./styles.module.css";
interface IProps {
  count: number;
  style: string;
}
export default function Skiliton({ count, style }: IProps) {
  return count > 1 ? (
    <ul className={style === "row" ? styles.list_row : styles.list_colum}>
      {[...Array(count)].map((_, index) => (
        <li key={index} className={styles.item}></li>
      ))}
    </ul>
  ) : (
    <div className={styles.banner}></div>
  );
}
