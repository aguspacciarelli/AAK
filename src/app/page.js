import CardsGrid from "@/app/components/CardsGrid/CardsGrid";
import Card from "@/app/components/Card/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["containerCardsGrid"]}>
        <CardsGrid />
      </div>
    </main>
  );
}
