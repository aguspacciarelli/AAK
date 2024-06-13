import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.contenedorgral}>
      <Image src="/logo.svg" alt="Descripción de la imagen" width={300} height={100} />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#contact" className={styles.a}>Contact Us</a>
          </li>
          <li className={styles.li}>
            <a href="#social" className={styles.a}>Social Media</a>
          </li>
          <li className={styles.li}>
            <a href="#privacy" className={styles.a}>Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
