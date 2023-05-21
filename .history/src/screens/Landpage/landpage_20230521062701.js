import React from "react";
import logo from "./images/logo.png";
import prof from "./images/prof.png";
import { Container, Card, Title, Button, Subtitle, Background, LogoImage, Login , Main} from "./styles";

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
            <div>
              <h3>Paciente</h3>
              <h3>Profissional</h3>
            </div>
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
