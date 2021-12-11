import React from "react";
import { Counter } from "./features/counter/Counter";
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
  background-image: url(${bg});
`;

export default App;
