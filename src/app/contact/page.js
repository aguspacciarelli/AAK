import styles from "@/app/contact/page.module.css";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className={styles["container"]}>
        <div className={styles["contactImage"]}>
          <Image
            src='/images/contactUsImageTest.png'
            alt='Alt text'
            width={1536}
            height={360}
          />
          <div className={styles["contactBody"]}>
            <div className={styles["contactInfo"]}>
              <div className={styles["museumContact"]}>
                <h4>Mailing Address & Phone</h4>
                <ul>
                  <li>Harvard Art Museums</li>
                  <li>32 Quincy Street</li>
                  <li>Cambridge, MA 02138</li>
                  <li>
                    <a>1 (617) 495-9400</a>
                  </li>
                </ul>
              </div>
              <div className={styles["museumAddresses"]}>
                <h4>General Inquiries</h4>
                <ul>
                  <li>
                    For event rentals, contact <a>am_rentals@harvard.edu</a>
                  </li>
                  <li>
                    For group visits, contact  <a>am_groupvisits@harvard.edu</a>
                  </li>
                  <li>
                    For membership, contact <a>am_membership@harvard.edu</a>
                  </li>
                  <li>
                    For image requests, contact <a>am_divr@harvard.edu</a>
                  </li>
                  <li>
                    For the Art Study Center, contact 
                    <a>am_artstudycenter@harvard.edu</a>
                  </li>
                  <li>
                    For campus art inquiries, contact 
                    <a>am_campusloans@harvard.edu</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["formContainer"]}>
              <h2>Contact Us</h2>
              <form className={styles["contactForm"]}>
                <input
                  type='text'
                  id='yname'
                  name='yname'
                  placeholder='Your name'
                ></input>
                <input
                  type='email'
                  id='yemail'
                  name='yemail'
                  placeholder='Your e-mail'
                ></input>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='Subject'
                ></input>
                <input
                  type='text'
                  id='body'
                  name='body'
                  placeholder='Body'
                ></input>
                <input type='submit' value='SUBMIT' className={styles["buttonForm"]}></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
