"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/app/components/Card/Card";

const CardsGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(
        "https://api.harvardartmuseums.org/publication?apikey=9ab8ee4a-51ec-4027-9cb4-5e9535dc9cb7&hasimage=1"
      );
      console.log(response.data);
      setData(response.data.records);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
       <div>
        {data.map((item)=>{
          return (
            <Card 
            key={item}
            title={item.title}
            img={item.primaryimageurl}
            place={item.publicationplace}
            />
          )
        })}
        </div>
      )}
    </div>
  );
};

export default CardsGrid;