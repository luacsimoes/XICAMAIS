import React from 'react';
import { Container, Title, AboutSection, AboutTitle, NavBar } from './styles';

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
      <NavBar>oi</NavBar>
        <Title>XICA+</Title>
        <button onClick={handleScroll}>Saiba Mais</button>
      </Container>
      <AboutSection>
        <AboutTitle>Sobre</AboutTitle>
        <p>Descrição do seu produto ou empresa.</p>
      </AboutSection>
    </>
  );
}

export default Landpage;
