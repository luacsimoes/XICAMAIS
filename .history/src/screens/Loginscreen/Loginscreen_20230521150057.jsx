import React, { useState } from "react";
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
  Loginst,
  Main,
  HeadCard,
  ForgetText,
} from "./styles";

function Signin() {
  const [selectedName, setSelectedName] = useState("");
  const handleNameClick = (name) => {
    setSelectedName(name);
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
        <Loginst>
          <Card>
            <HeadCard>
              <AreaTitle
                onClick={() => handleNameClick("Paciente")}
                selected={selectedName === "Paciente"}
              >
                Paciente
              </AreaTitle>
              <AreaTitle
                onClick={() => handleNameClick("Profissional")}
                selected={selectedName === "Profissional"}
              >
                Profissional
              </AreaTitle>
            </HeadCard>
            <MainCard>
              <InputWrapper>
                <InputLabel>Login</InputLabel>
                <Input type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Senha</InputLabel>
                <Input type="password" />
              </InputWrapper>
            </MainCard>
            <Button>Entrar</Button>
            <ForgetText>Esqueceu sua senha?</ForgetText>
          </Card>
        </Loginst>
      </Background>
    </Container>
  );
}

export default Signin;
