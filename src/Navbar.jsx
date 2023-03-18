import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div>Logo</div>
      <button>Login</button>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    padding: 0.5rem 2rem;
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: blueviolet;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default Navbar;
