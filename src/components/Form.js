import React from "react";
import styled from "styled-components";
import Truck from "../assets/svg/truck";
import AccordionCard from "./Accordion";

function Form() {
  return (
    <Container>
      <Header>
        <Truck />
        <Title>Newage 22ft Full Off Road</Title>
        <Subtitle>Choose Your Options & Extras</Subtitle>
      </Header>
      <Divider />
      <AccordionCard
        name="Wheels"
        showOption={true}
        names={["Default", "Premium Tires", "Luxury Tires"]}
        prices={["$0", "$100", "$150"]}
        options={["Size:", "Brand:"]}
        showStepper={false}
      />
      <AccordionCard
        name="Toolbox"
        showOption={false}
        names={["Default", "Premium Toolbox", "Luxury Toolbox"]}
        prices={["$0", "$125", "$175"]}
        options={[]}
        showStepper={false}
      />

      <AccordionCard
        name="External Lights"
        showOption={true}
        names={["Left > Normal", "Front", "End"]}
        prices={["$0", "$150", "$200"]}
        options={["Type:"]}
        showStepper={true}
      />
      <AccordionCard
        name="Water Tanks"
        showOption={false}
        names={["85 ltr X 2", "95 ltr", "110 ltr"]}
        prices={["$0", "$150", "$200"]}
        options={[]}
        showStepper={true}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 19vh auto 0 auto;
  background-color: white;
  width: 70%;
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 35px 30px;
  @media (max-width: 560px) {
    padding: 0px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-right: 25.75%;
  margin-left: 30px;
  @media (max-width: 560px) {
    text-align: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Subtitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #848484;
  @media (max-width: 560px) {
    text-align: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e0e0e0;
`;

export default Form;
