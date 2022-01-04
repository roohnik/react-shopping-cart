import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Products from "../components/Products";

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "Header" "Main" "Footer";
  grid-template-rows: 12rem 1fr 21rem;
  grid-template-columns: 1fr;
  height: 100%;
`;

const Home = () => {
  return (
    <GridContainer>
      <Header />
      <Main />
      <Footer />
    </GridContainer>
  );
};

export default Home;
