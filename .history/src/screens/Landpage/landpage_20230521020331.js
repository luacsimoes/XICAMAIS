import React from 'react';
import { Container, Title, AboutSection, AboutTitle } from './styles';

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
      <div>oi</div>
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
