import React from "react";
import logo from "./images/logo.png";
import prof from "./images/prof.png";
import { Container, Title, Background, LogoImage, LoginCard } from "./styles";

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
      <div><LogoImage src={prof} alt="Logo" />
        <h1>TRANSforme sua saúde</h1></div>
        <LoginCard>
          <h1>oi</h1>
        </LoginCard>
      </Background>
    </Container>
  );
}

export default Landpage;
