"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const CardsGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(
        "https://api.harvardartmuseums.org/object?apikey=9ab8ee4a-51ec-4027-9cb4-5e9535dc9cb7"
      );
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <img src='' alt='' />
          <h2>{data.id}</h2>
        </>
      )}
    </div>
  );
};

export default CardsGrid;
