import CardsGrid from "@/app/components/CardsGrid/CardsGrid";
import Card from "@/app/components/Card/Card";
import styles from "./page.module.css";
import Hero from"@/app/components/Hero/Hero"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero mainText={'Veni a visitar el museo Harvard'}/>
      <div className={styles["containerCardsGrid"]}>
        <CardsGrid />
      </div>
    </main>
  );
}
