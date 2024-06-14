import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.contenedorgral}>
      <Image src="/logo_cremita.svg" alt="Descripción de la imagen" width={250} height={87} />
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
      <div className={styles.socialmedia}>
      <nav>
        <ul>
          <li>
            <a title="facebook" href="http://www.facebook.com"><Image src="/images/facebook.svg" alt='fb' width={15.75} height={30} /></a>
          </li>
          <li>
           <a title="instagram" href="http://www.instagram.com"><Image src="/images/instagram.svg" alt='ig' width={30} height={30} /></a> 
          </li>
          <li>
           <a title="twitter" href="http://www.twitter.com"><Image src="/images/twitter.svg" alt='tw' width={31.38} height={25.5} /></a>
          </li>
          <li>
            <a title="pinterest" href="http://www.pinterest.com"><Image src="/images/pinterest.svg" alt='pnt' width={30} height={30} /></a>
          </li>
          <li>
           <a title="github" href="http://www.github.com"><Image src="/images/github.svg" alt='gt' width={30} height={29.30} /></a>
          </li>
        </ul>
       </nav>
      </div>
    </div>
  );
}

export default Footer;
