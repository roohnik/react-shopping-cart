import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // display: grid;
  // grid-template-areas: "header" "main" "footer";
  // grid-template-rows: 5rem 1fr 5rem;
  // grid-template-columns: 1fr;
  height: 80vh;
  display: flex;
  align-items: center;
`;
const MainContent = styled.div``;

const Main = () => {
  return (
    <Container>
      <MainContent>محصولات</MainContent>
    </Container>
  );
};

export default Main;
