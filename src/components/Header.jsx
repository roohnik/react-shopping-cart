import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  grid-area: Header;
`;

const Header = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Header;
