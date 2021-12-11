import React, { useState } from "react";
import styled from "styled-components";
import Chevron from "../assets/svg/chevron";
import { Dropdown } from "react-bootstrap";
import OptionCard from "./OptionCard";

const AccordionCard = ({
  name,
  showOption,
  names,
  prices,
  showStepper,
  options,
}) => {
  const [rotate, setRotate] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSelectedCard = (number, qty) => {
    setTotal(
      parseInt(prices[number].substring(1, prices[number].length)) * qty
    );
    setSelectedCard(number);
  };

  return (
    <Accordion>
      <AccordionButton>
        <CardTitle>{name}</CardTitle>
        <PriceContainer>
          {total !== 0 && <CardTitle>+{total}$</CardTitle>}
          <ChevronButton rotate={rotate} onClick={() => setRotate(!rotate)}>
            <Chevron />
          </ChevronButton>
        </PriceContainer>
      </AccordionButton>
      <InsideCardContainer>
        <Included>
          <InsideCardTitle>Included</InsideCardTitle>
          <OptionCard
            name={names[0]}
            price={prices[0]}
            marginTop={"50px"}
            cardNumber={0}
            isSelected={0 === selectedCard}
            handleSelectedCard={handleSelectedCard}
            showStepper={showStepper}
          />
        </Included>
        <Seperator />
        <Options>
          <OptionHeader>
            <InsideCardTitle>Options</InsideCardTitle>
            {showOption && (
              <>
                {options.map((option, index) => {
                  return (
                    <div key={index}>
                      <Select label={option} />
                    </div>
                  );
                })}
              </>
            )}
          </OptionHeader>
          <OptionCardContainer>
            <OptionCard
              name={names[1]}
              price={prices[1]}
              marginTop={showOption ? "10px" : "50px"}
              marginLeft={"20px"}
              cardNumber={1}
              isSelected={1 === selectedCard}
              handleSelectedCard={handleSelectedCard}
              showStepper={showStepper}
            />
            <OptionCard
              name={names[2]}
              price={prices[2]}
              marginTop={showOption ? "10px" : "50px"}
              marginLeft={"20px"}
              cardNumber={2}
              isSelected={2 === selectedCard}
              handleSelectedCard={handleSelectedCard}
              showStepper={showStepper}
            />
          </OptionCardContainer>
        </Options>
      </InsideCardContainer>
    </Accordion>
  );
};

const Select = ({ label }) => {
  const [selected, setSelected] = useState("16");
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant=" #F8F8F8">
          {selected}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="light">
          <Dropdown.Item onClick={() => setSelected("17")} active>
            17
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelected("18")}>18</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelected("19")}>19</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </SelectContainer>
  );
};

const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 177.5%;
  text-transwheelsaccordion: capitalize;

  color: #3d3d3d;
`;
const OptionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 670px) {
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
  }
`;
const SelectContainer = styled.div`
  margin-left: 30px;
`;
const Seperator = styled.div`
  height: 295px;
  width: 1px;
  background-color: #b9b9b9;
  margin-left: 34px;
  @media (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const ChevronButton = styled.button`
  margin-right: 20px;
  margin-bottom: ${(props) => (props.rotate ? "10px" : "0px")};
  background-color: #464646;
  border: 0px;
  transform: rotate(${(props) => (props.rotate ? "180deg" : "0deg")});
`;
const Included = styled.div`
  display: flex;
  flex-direction: column;
`;
const Options = styled.div`
  @media (max-width: 670px) {
    margin-top: 10px;
  }
`;
const OptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Accordion = styled.div`
  width: 90%;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 500px;
  margin: 8vh auto 0 auto;

  @media (max-width: 1000px) {
    height: 700px;
  }
  @media (max-width: 670px) {
    height: 1000px;
  }
`;
const AccordionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #464646;
  border-radius: 5px;
  height: 60px;
`;
const InsideCardTitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-decoration: solid underline #d94e3b 4px;
`;
const InsideCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const CardTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-left: 20px;
`;

export default AccordionCard;
