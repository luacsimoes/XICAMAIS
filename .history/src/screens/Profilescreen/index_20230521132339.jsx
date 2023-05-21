import React from "react";
import logo from "./images/logo.png";
import { Container, Sidebar, Portal, Content } from "./styles";

function Profilescreen() {
  return (
    <Container>
    <Content>
      <Sidebar><LogoImage src={logo} alt="prof" /></Sidebar>
      <Portal><h1>hello</h1></Portal>
      </Content>
    </Container>
  );
}

export default Profilescreen;
