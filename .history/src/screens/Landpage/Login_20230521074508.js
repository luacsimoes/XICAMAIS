import React from "react";
import logo from "./images/logo.png";
import prof from "./images/prof.png";
import {
  Container,
  Card,
  Title,
  Button,
  Subtitle,
  ProfImage,
  AreaTitle,
  MainCard,
  Background,
  InputLabel,
  InputWrapper,
  Input,
  LogoImage,
  Login,
  Main,
  HeadCard,
} from "./styles";

function LoginScreen() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container>
        <LogoImage src={logo} alt="prof" />
    <Background>
      <Main>
        <ProfImage src={prof} alt="prof" />
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
          <MainCard>
            <InputWrapper>
              <InputLabel>Login</InputLabel>
              <Input type="text" placeholder="Login" />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Senha</InputLabel>
              <Input type="password" placeholder="Senha" />
            </InputWrapper>
          </MainCard>
          <Button>Entrar</Button>
        </Card>
      </Login>
    </Background>
  </Container>
  );
}

export default Login;
