"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
// import CardsGrid from "@/app/components/CardsGrid/CardsGrid";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(
        "https://api.harvardartmuseums.org/exhibition?apikey=9ab8ee4a-51ec-4027-9cb4-5e9535dc9cb7&hasimage=1"
      );
      console.log(response.data.records[0]);
      setData(response.data.records[0]);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
        <Image src={data.images[0].baseimageurl} width={200} height={200} alt="no se ve la foto" />
          <p>{data.title}</p>
        </>
      )}
    </div>
  );
};

export default Card;