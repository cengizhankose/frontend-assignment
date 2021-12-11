import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import styled from "styled-components";
import bg from "./assets/image/bg.png";

function App() {
  return (
    <Background>
      <Navbar />
      <Form />
    </Background>
  );
}

const Background = styled.div`
  height: 100%;
  background-image: url(${bg});
`;

export default App;
