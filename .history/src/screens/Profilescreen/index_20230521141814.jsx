import React from "react";
import logo from "./images/logo.png";
import icon from "./images/avatar-xica.png";
import usericon from "./images/usericon.png";
import btnexams from "./images/btn-exams.png";
import star from "./images/star.png";
import {
  Container,
  Sidebar,
  Portal,
  Content,
  LogoImage,
  IconImage,
  Name,
  Age,
  InfoContainer,
  InfoText,
} from "./styles";

function Profilescreen() {
  return (
    <Container>
      <Content>
        <Sidebar>
          <LogoImage src={logo} alt="prof" />
          <IconImage src={icon} alt="prof" />
          <Name>Dandara Manicongo</Name>
          <Age>24 anos</Age>
          <InfoContainer>
            <img src={usericon} alt="prof" />
            <InfoText>Perfil</InfoText>
          </InfoContainer>
          <InfoContainer>
            <img src={btnexams} alt="prof" />
            <InfoText>Exames</InfoText>
          </InfoContainer>
          <InfoContainer>
            <img src={star} alt="prof" />
            <InfoText>Exames</InfoText>
          </InfoContainer>
        </Sidebar>
        <Portal>
          <h1>hello</h1>
        </Portal>
      </Content>
    </Container>
  );
}

export default Profilescreen;
