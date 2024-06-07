import Image from "next/image";
import styles from "./Card.module.css";

const Card = (props) => {
  const { title, img, place } = props;
  return (
    <div>
      <div>
        <h6>{title}</h6>
        <Image src={img} alt={title} width={200} height={200} />
        <p>{place}</p>
      </div>
    </div>
  );
};

export default Card;
