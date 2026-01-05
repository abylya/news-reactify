import styles from "./styles.module.css";

interface IProps {
  image: string;
}
export default function Image({ image }: IProps) {
  return (
    <>
      <div className={styles.wraper}>
        {image ? (
          <img src={image} alt="news image" className={styles.image}></img>
        ) : null}
      </div>
    </>
  );
}
