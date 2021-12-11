import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tick from "../assets/svg/tick";

const OptionCard = ({
  name,
  price,
  marginTop,
  marginLeft,
  cardNumber,
  isSelected,
  handleSelectedCard,
  showStepper,
}) => {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    handleSelectedCard(cardNumber, qty);
  }, [qty]);

  return (
    <OptionCardContainer marginTop={marginTop} marginLeft={marginLeft}>
      <OptionCardTitle>{name}</OptionCardTitle>
      <OptionCardImage
        onClick={() => {
          handleSelectedCard(cardNumber, qty);
        }}
      >
        <img
          width={160}
          height={160}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg?crop=1.00xw:0.629xh;0,0.318xh"
          alt="tire"
        />
        <OptionCardTick selected={isSelected}>
          <Tick />
        </OptionCardTick>
        {showStepper && (
          <OptionCardStepper>
            <OptionCardStepperDecrement
              onClick={() => {
                if (qty !== 1) {
                  setQty(qty - 1);
                  handleSelectedCard(cardNumber, qty);
                }
              }}
            >
              -
            </OptionCardStepperDecrement>
            <OptionCardStepperShowCount>
              <OptionCardStepperTitle>{qty}</OptionCardStepperTitle>
            </OptionCardStepperShowCount>
            <OptionCardStepperIncrement
              onClick={() => {
                setQty(qty + 1);
                handleSelectedCard(cardNumber, qty);
              }}
            >
              +
            </OptionCardStepperIncrement>
          </OptionCardStepper>
        )}
      </OptionCardImage>
      <OptionCardPrice>{price}</OptionCardPrice>
    </OptionCardContainer>
  );
};

const OptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
`;
const OptionCardTitle = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  margin-bottom: 12px;
`;
const OptionCardStepperTitle = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 200%;
  text-align: center;
`;

const OptionCardStepperDecrement = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
`;

const OptionCardStepperShowCount = styled.div`
  width: 60px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
`;

const OptionCardStepperIncrement = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
`;

const OptionCardImage = styled.button`
  position: relative;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
`;

const OptionCardStepper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 30px;
  bottom: 10px;
  left: 20px;
`;

const OptionCardTick = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 30px;
  background-color: ${(props) => (props.selected ? "#D94E3B" : "#ffffff")};
  border: 1px solid #d94e3b;
`;
const OptionCardPrice = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  margin-top: 12px;
`;

export default OptionCard;
