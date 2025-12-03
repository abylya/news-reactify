import styles from "./styles.module.css";
export default function Image({image}) {
  return <>
     <div className={styles.wraper}>
       {image?<img src={image} alt='news image' className={styles.image}></img>:null}
     </div>
  </>
}