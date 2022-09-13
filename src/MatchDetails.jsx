import React, { useEffect, useState } from "react";

const MatchDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        "https://rest.entitysport.com/v2/competitions/56606/squads/?token=ec471071441bb2ac538a0ff901abd249",
        {
          //   mode: "no-cors",
        }
      );
      let data = await res.json();
      setData(data.response.items);
      console.log(data.response.items);
    }
    fetchData();
  }, []);
  return <div>MatchDetails</div>;
};

export default MatchDetails;
