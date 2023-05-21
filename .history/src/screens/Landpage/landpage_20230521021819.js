import React from 'react';
import { Container, Title, AboutSection, AboutTitle, NavBar, GradientButton, Card } from './styles';

function Landpage() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
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
       
      </Container>
      <AboutSection>
        <AboutTitle>Sobre</AboutTitle>
        <p>Descrição do seu produto ou empresa.</p>
      </AboutSection>
    </>
  );
}

export default Landpage;
