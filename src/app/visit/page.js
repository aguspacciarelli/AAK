import styles from "@/app/visit/page.module.css";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Visit</h1>
          <h6>
            Just steps away from Harvard Square, the Harvard Art Museums welcome
            visitors from around the corner and around the world! Enjoy the many
            amenities that greet you upon entering the museums expansive and
            beautifully restored Calderwood Courtyard on the first floor. From
            there, grab a coffee or snack in Jennys Cafe or browse the many
            unique gifts in the museum shop before exploring over 50 galleries
            of art across three floors.
          </h6>
          <div className={styles["containerIcon"]}>
            <Image className={styles["icons"]}
              src="/images/ubication.svg"
              width={14}
              height={14}
              alt="icono ubicacion"
            />{" "}
            <a
              className={styles.a}
              title="cambridge"
              href="https://maps.app.goo.gl/zergd6TKjKkTkBVi6"
            >
              <p>Cambridge, Massachusetts 02138</p>
            </a>
          </div>
          <div className={styles["containerIcon"]}>
            <Image className={styles["icons"]}
              src="/images/time.svg"
              width={14}
              height={14}
              alt="icono ubicacion"
            />{" "}
            <p>10.00 am - 5.00 pm | Tuesday - Sunday</p>
          </div>

          <button>Book your place</button>
        </div>
      </div>
    </main>
  );
};

export default page;
