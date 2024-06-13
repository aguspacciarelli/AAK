import styles from "@/app/about/page.module.css"
import Image from "next/image";

const page = () => {
  return (
    <main>
        <div className={styles.contenedor} >
           <h1>About us</h1>  
           <p>As an academic art institution, research and education are key to the Harvard Art Museums. Through art, the museums create powerful opportunities for the production, presentation, and interpretation of original scholarship. By offering unparalleled access to our collections and resources, the museums foster new approaches to the study and appreciation of art.</p>
           <Image src="/images/about.jpeg" width={750} height={506} alt="mujer mirando cuadro"/>
        </div>
       
    </main>
  );
}

export default page;
