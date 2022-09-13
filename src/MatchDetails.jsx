import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const url = `https://rest.entitysport.com/v2/competitions/${id}/squads/?token=ec471071441bb2ac538a0ff901abd249`;
      let res = await fetch(url, {
        mode: "no-cors",
        headers: {
          "content-type": "application/html",
        },
      });
      //   let data = await res.json();
      //   setData(data.response.items);
      //   console.log(data.response.items);
      console.log(res);
    }
    fetchData();
  }, []);
  return <div>MatchDetails</div>;
};

export default MatchDetails;
