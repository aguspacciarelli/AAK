"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function CardDetails({ id }) {
  const [cardDetails, setCardDetails] = useState({})

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.harvardartmuseums.org/publication/${id}?apikey=9ab8ee4a-51ec-4027-9cb4-5e9535dc9cb7&hasimage=1`
        )
        console.log(response.data)
        setCardDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCardDetails()
  }, [id]);
  return (
  <div>
    <h2>{cardDetails.title}</h2>
    <p>{cardDetails.publicationplace}</p>
    <p>{cardDetails.publicationdate}</p>
    <p>{cardDetails.citation}</p>
    <p>{cardDetails.description}</p>
    <Image src={cardDetails.primaryimageurl} alt={cardDetails.title} width={544} height={512}/>
  </div>
  )
}

export default CardDetails;
