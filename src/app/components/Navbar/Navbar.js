import Link from "next/link";
import Image from "next/image"
import styles from "@/app/components/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.contenedor}>
      <Image 
      src='/logo.svg'
      alt= 'Harvard Museum Logo'
      width={200}
      height={50}
      priority
      />

      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;