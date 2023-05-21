import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  font-family: Arial, sans-serif;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: white;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const AreaTitle = styled.h1`
  font-size: 36px;
  color: #c0c0c0;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const Subtitle = styled.h1`
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const Background = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #00000069;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const LogoImage = styled.img`
  width: 10vw;
  height: auto;
  margin-bottom: 28px;
`;

export const NavBar = styled.section`
  background-color: #d0fc60;
  padding: 8px;
`;

export const Card = styled.section`
  background-color: white;
  height: 70%;
  width: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const HeadCard = styled.section`
  margin-top: 64px;
  background-color: red;
  display: flex;
`;

export const MainCard = styled.section`
  background-color: red;
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
  margin: 0;
`;

export const Login = styled.div`
  height: 100vh;
  background-color: rgba(240, 240, 240, 0.5);
  display: flex;
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

export const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 20px;
  margin-top: 24px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
