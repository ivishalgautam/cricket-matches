import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <CardContainer className="card">
      <Link to={`/matchDetails/${data.competition.cid}`}>
        <Teams>
          <ul>
            <li>
              <div>
                <img src={data.teama.logo_url} />
                <p>{data.teama.name}</p>
                <small>{data.teama.scores_full}</small>
              </div>
            </li>
            <li>
              <div>
                <img src={data.teamb.logo_url} />
                <p>{data.teamb.name}</p>
                <small>{data.teamb.scores_full}</small>
              </div>
            </li>
          </ul>
        </Teams>
        <p>{data.status_note}</p>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000; */
  padding: 0.8em 0.5em;
  background-color: #202124;

  a {
    text-decoration: none;
    color: #000;
    > p {
      font-size: 0.7em;
      text-align: center;
      color: #999;
      margin-top: 2em;
    }
  }
`;

const Teams = styled.div`
  ul {
    list-style: none;

    li {
      margin-bottom: 10px;

      div {
        display: flex;
        align-items: center;

        img {
          width: 1.5em;
          height: 1.5em;
          margin-right: 5px;
          border-radius: 5px;
        }

        p {
          font-size: 0.7em;
          font-weight: 500;
          margin-right: auto;
          color: #bdc1c6;
        }

        small {
          font-size: 0.7em;
          font-weight: 600;
          margin-left: 1em;
          color: #bdc1c6;
        }
      }
    }
  }
`;

export default Card;
