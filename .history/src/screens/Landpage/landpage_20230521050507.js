import React from "react";
import logo from "./images/logo.png";
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
        <Main>
          <LoginCard>
            <LogoImage src={logo} alt="Logo" />
            <h2>Acesse Já</h2>
            <GradientButton onClick={handleScroll}>Saiba Mais</GradientButton>
          </LoginCard>
          <LoginCard>
            {/* Aqui vem o fluxo de login */}
            <h2>Fluxo de Login</h2>
          </LoginCard>
        </Main>
      </Background>
    </Container>
  );
}

export default Landpage;
