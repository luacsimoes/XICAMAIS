import React from "react";
import {
  Container,
  Title,
  AboutSection,
  AboutTitle,
  NavBar,
  GradientButton,
  Card,
  Main
} from "./styles";

function Landpage() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <NavBar>XICA+</NavBar>
        <Card>
          <Title>XICA+</Title>
          <GradientButton onClick={handleScroll}>Saiba Mais</GradientButton>
        </Card>
      <AboutSection>
        <AboutTitle>Sobre</AboutTitle>
        <p>Descrição do seu produto ou empresa.</p>
      </AboutSection>
      </Container>
    </>
  );
}

export default Landpage;
