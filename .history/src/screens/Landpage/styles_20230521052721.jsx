import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: Arial, sans-serif;
  width: 100vw;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-left: 24px;
`;

export const Background = styled.section`
  height: 100vh;
  width:50vw;
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

export const LogoImage = styled.img`
  width: 10vw;
  height: auto;
`;

export const NavBar = styled.section`
  background-color: #d0fc60;
  padding: 8px;
`;

export const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginCard = styled.div`
  background-color: gray;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  h2 {
    margin-bottom: 16px;
  }
`;

export const GradientButton = styled.button`
  border-radius: 8px;
  background: linear-gradient(#994de3, #d0fc60);
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width: 300px;
  margin-top: 16px;
`;
