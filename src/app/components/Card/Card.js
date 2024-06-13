import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = (props) => {
  const { title, img, place, id } = props;
  return (
    <div className={styles["container"]}>
      <Image src={img} alt={title} width={137} height={183} className={styles["cardElements"]}/>
      <div className={styles["elementsContainer"]}>
      <div className={styles["textContainer"]}>
      <h4 className={styles["cardElements"]}>{title}</h4>
      <p className={styles["cardElements"]}>{place}</p>
      </div>
      <Link href={`/exhibition/${id}`} className={styles["boton"]}>Ver más</Link>
      </div>
    </div>
  );
};

export default Card;
