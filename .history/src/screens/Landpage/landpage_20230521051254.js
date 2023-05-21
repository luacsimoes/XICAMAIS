import React from "react";
import {logo, prof} from "./images/logo.png";
import {
  Container,
  Title,
  Background,
  AboutTitle,
  NavBar,
  GradientButton,
  LoginCard,
  Main,
  LogoImage,
} from "./styles";

function Landpage() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Background>
      <LogoImage src={prof} alt="Logo" />
      </Background>
    </Container>
  );
}

export default Landpage;
