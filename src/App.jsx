import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1"
      );
      let data = await res.json();
      setData(data.response.items);
      console.log(data.response.items);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <GridContainer>
        {data.map((item) => {
          return <Card key={item.match_id} data={item} />;
        })}
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4em 15%;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  grid-template-rows: 8em;
  gap: 1px;
`;

export default App;
