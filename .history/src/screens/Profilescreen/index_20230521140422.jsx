import React from "react";
import logo from "./images/logo.png";
import icon from "./images/avatar-xica.png";
import { Container, Sidebar, Portal, Content, LogoImage, IconImage, Name, Age } from "./styles";

function Profilescreen() {
  return (
    <Container>
    <Content>
      <Sidebar>
      <LogoImage src={logo} alt="prof" />
      <IconImage src={icon} alt="prof" />
      <Name>Dandara Manicongo</Name>
      <Age>Dandara Manicongo</Age>
      </Sidebar>
      <Portal><h1>hello</h1></Portal>
      </Content>
    </Container>
  );
}

export default Profilescreen;
