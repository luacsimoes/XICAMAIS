import React from "react";
import logo from "./images/logo.png";
import {
  Container,
  Title,
  Background,
  AboutTitle,
  NavBar,
  GradientButton,
  Card,
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
        <h1>oi</h1>
      </Background>
    </Container>
  );
}

export default Landpage;
