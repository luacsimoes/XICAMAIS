import React from "react";
import logo from "./images/logo.png";
import icon from "./images/avatar-xica.png";
import user-icon from "./images/user-icon.png";
import { Container, Sidebar, Portal, Content, LogoImage, IconImage, Name, Age } from "./styles";

function Profilescreen() {
  return (
    <Container>
    <Content>
      <Sidebar>
      <LogoImage src={logo} alt="prof" />
      <IconImage src={icon} alt="prof" />
      <Name>Dandara Manicongo</Name>
      <Age>24 anos</Age>
      <div><img src={user-icon} alt="prof" /></div>
      </Sidebar>
      <Portal><h1>hello</h1></Portal>
      </Content>
    </Container>
  );
}

export default Profilescreen;
