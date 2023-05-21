import React from "react";
import logo from "./images/logo.png";
import prof from "./images/prof.png";
import { Container, Card, Title, Button, Subtitle, AreaTitle, Background, LogoImage, Login , Main, HeadCard} from "./styles";

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
          <LogoImage src={prof} alt="Logo" />
          <Title>TRANSforme sua saúde</Title>
          <Subtitle>Informe-se sobre seu corpo e sua mente</Subtitle>
          <Button>Acesse já</Button>
        </Main>
        <Login>
          <Card>
            <HeadCard>
              <AreaTitle>Paciente</AreaTitle>
              <AreaTitle>Profissional</AreaTitle>
            </HeadCard>
            <div>
              <input type="text" placeholder="Login" />
              <input type="password" placeholder="Senha" />
            </div>
            <Button>Entrar</Button>
          </Card>
        </Login>
      </Background>
    </Container>
  );
}

export default Landpage;
