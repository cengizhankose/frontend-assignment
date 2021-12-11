import React from "react";
import styled from "styled-components";
import Truck from "../assets/svg/truck";

function Form() {
  return (
    <Container>
      <Header>
        <Truck />
        <Title>Newage 22ft Full Off Road</Title>
        <Subtitle>Choose Your Options & Extras</Subtitle>
      </Header>
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  margin: 19vh auto 0 auto;
  background-color: white;
  width: 61%;
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
  padding-bottom: 100px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 35px 30px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-right: 25.75%;
  margin-left: 10px;
`;
const Subtitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #848484;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e0e0e0;
`;

export default Form;
