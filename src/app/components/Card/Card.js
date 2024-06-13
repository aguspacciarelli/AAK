import Image from "next/image";
import styles from "./Card.module.css";

const Card = (props) => {
  const { title, img, place } = props;
  return (
    <div className={styles["container"]}>
      <Image src={img} alt={title} width={214} height={306} className={styles["cardElements"]}/>
      <div  className={styles["textContainer"]}>
      <h4 className={styles["cardElements"]}>{title}</h4>
      <p className={styles["cardElements"]}>{place}</p>
      </div>
      <button className={styles["boton"]}>Ver más</button>
    </div>
  );
};

export default Card;
