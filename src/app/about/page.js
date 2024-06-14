import styles from "@/app/about/page.module.css"
import Image from "next/image";

const page = () => {
  return (
    <main>
        <div className={styles.contenedor} >
           <h1>About the museum</h1>  
           <p>Ever since their founding, the Harvard Art Museums—the Fogg Museum, Busch-Reisinger Museum, and Arthur M. Sackler Museum—have been dedicated to advancing and supporting learning at Harvard University, in the local community, and around the world. The museums have played a leading role in the development of art history, conservation, and conservation science, and in the evolution of the art museum as an institution.

            Through research, teaching, professional training, and public education, the museums strive to advance the understanding and appreciation of art. Programs encourage close looking at original works of art, collaboration with campus and community partners, and the production of new scholarship..</p>
           <Image src="/images/about.jpeg" width={750} height={506} alt="mujer mirando cuadro"/>
        </div>
       
    </main>
  );
}

export default page;
