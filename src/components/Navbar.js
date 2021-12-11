import React from "react";
import Avatar from "../assets/svg/user-avatar";
import Logo from "../assets/svg/logo";
import styled from "styled-components";

function Navbar() {
  return (
    <TopBar>
      <Logo />
      <Avatar />
    </TopBar>
  );
}

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.9vh 1.3vw;
  box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.1);
`;

export default Navbar;
