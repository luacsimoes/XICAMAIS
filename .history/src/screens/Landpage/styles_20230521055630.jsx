import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  font-family: Arial, sans-serif;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-family: "Poppins", sans-serif;
`;

export const Background = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
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

export const Card = styled.section`
  background-color: white;
  height: 50%;
  width: 40%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Main = styled.section`
  height: 100vh;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const Login = styled.div`
  height: 100vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 80px 0px 0px 80px;

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