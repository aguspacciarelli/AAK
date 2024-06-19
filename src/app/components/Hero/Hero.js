import styles from "./Hero.module.css";

const Hero = ({ mainText }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero_bkg"]}>
        <h1>{mainText}</h1>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default Hero;