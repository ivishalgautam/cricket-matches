import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MatchDetails = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        `https://rest.entitysport.com/v2/competitions/${id}/squads/?token=ec471071441bb2ac538a0ff901abd249`
      );
      let data = await resp.json();
      setData(data.response.squads);
      console.log(data.response.squads);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <h1>Teams for the matches.</h1>
      <GridContainer>
        {data.map((item) => {
          return (
            <CardContainer key={item.team_id}>
              <img src={item.team.logo_url} alt="" />
              <h1>{item.title}</h1>
              <p>{item.gmdate}</p>
            </CardContainer>
          );
        })}
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4em 15%;
  > h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  gap: 1px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0.7rem;
  background-color: #202124;
  flex-direction: column;

  > h1 {
    font-size: 1rem;
  }

  > img {
    width: 1.5em;
    height: 1.5em;
  }
`;

export default MatchDetails;
