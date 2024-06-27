"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/app/components/CardDetails/CardDetails.module.css";

function CardDetails({ id }) {
  const [cardDetails, setCardDetails] = useState({});

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.harvardartmuseums.org/publication/${id}?apikey=9ab8ee4a-51ec-4027-9cb4-5e9535dc9cb7&hasimage=1`
        );
        console.log(response.data);
        setCardDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCardDetails();
  }, [id]);
  const getPeople = cardDetails.people
  return (
    <div className={styles["container"]}>
      <div className={styles["divDatePlace"]}><p>{cardDetails.publicationdate}</p></div>
      <div className={styles["detailsContainer"]}>
        <div className={styles["generalInformation"]}>
          <h2>{cardDetails.title}</h2>
        </div>
        <div className={styles["bodyInformation"]}>
          <Image
            src={cardDetails.primaryimageurl}
            alt={cardDetails.title}
            width={444}
            height={500}
          />
          <p>{cardDetails.citation}</p>
          <p>{cardDetails.description}</p>
        </div>
      </div>
      <div className={styles["divDatePlace"]}><p>{cardDetails.publicationplace}</p></div>
    </div>
  );
}

export default CardDetails;
