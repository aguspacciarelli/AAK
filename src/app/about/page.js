import styles from "@/app/about/page.module.css";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.fixedImageDiv}>
           <Image
          src='/images/about.jpg'
          width={600}
          height={604}
          alt='mujer mirando cuadro'
        />
        </div>
        <div className={styles.textContainer}>
        <h1>About the Harvard Art Museum </h1>
        <p>
          Just steps away from Harvard Square in Cambridge, Massachusetts, the
          Harvard Art Museums welcome visitors from around the corner and around
          the world. Visitors can enjoy the many amenities that greet them upon
          entering the museums’ beautifully restored Calderwood Courtyard on the
          first floor—our own version of a town square. From there, grab a
          coffee or snack in Jenny’s Cafe or browse the many unique gifts in the
          museum shop before exploring over 50 galleries of art across three
          floors.
        </p>

        <p>
          In addition to the galleries, visitors can view works of art not
          currently on display by appointment in the expansive Art Study Center.
          Conveniently browse the collections and make an appointment.{" "}
        </p>

        <p>
          Many engaging public programs take place throughout the year, from
          gallery tours to artist talks to workshops in our Materials Lab, a
          hands-on environment for art making. Once each month, we keep our
          doors open until 9pm for an evening of art, music, food, special
          activities, and more. By offering unparalleled access to our
          collections and resources, the Harvard Art Museums encourage the
          enjoyment of art by everyone!
        </p>

        <p>
          The museums are open Tuesday through Sunday, from 10am to 5pm, and are
          free to all visitors every day. Plan your next visit.
        </p>

        <p>
          Ever since their founding, the Harvard Art Museums—the Fogg Museum,
          Busch-Reisinger Museum, and Arthur M. Sackler Museum—have been
          dedicated to advancing and supporting learning at Harvard University,
          in the local community, and around the world. The museums have played
          a leading role in the development of art history, conservation, and
          conservation science, and in the evolution of the art museum as an
          institution.
        </p>

        <p>
          Through research, teaching, professional training, and public
          education, the museums strive to advance the understanding and
          appreciation of art. Programs encourage close looking at original
          works of art, collaboration with campus and community partners, and
          the production of new scholarship.
        </p>
        </div>
      </div>
    </main>
  );
};

export default page;
