import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-left: 24px;
`;

export const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #994de3;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const AboutTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const NavBar = styled.section`
  background-color: #d0fc60;
  padding: 8px;
`;

export const Card = styled.section`
  background-color: gray;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

export const GradientButton = styled.button`
  border-radius: 8px;
  background: linear-gradient(#994de3, #d0fc60);
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width: 300px;
`;
