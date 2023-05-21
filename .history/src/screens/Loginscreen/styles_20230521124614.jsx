import styled from "styled-components";
import backgroundImage from "./images/background-image.jpeg";

export const Container = styled.div`
  height: 100vh;
  font-family: "Poppins", sans-serif;
  height: 100%;
  background-image: url(${backgroundImage});
`;

export const Title = styled.h1`
  font-size: 36px;
  color: black;
  font-family: "Poppins", sans-serif;
`;

export const ForgetText = styled.h1`
  font-size: 12px;
  font-weight: 400;
  color:#C0C0C0;
  font-family: "Poppins", sans-serif;
`;

export const AreaTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  color: #C0C0C0;


  &:after {
    content: "";
    display: ${({ selected }) => (selected ? "block" : "none")};
    width: 100%;
    height: 2px;
    background-color: #8f5db9;
    position: absolute;
    bottom: -2px;
    left: 0;
  }
`;

export const Subtitle = styled.h1`
  font-size: 16px;
  color: black;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 16px;
`;

export const Label = styled.h1`
  font-size: 16px;
  color: #8f5db9;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 16px;
`;

export const Background = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #FFFFFF00;
  font-family: "Poppins", sans-serif;
`;

export const LogoImage = styled.img`
  width: 15vw;
  height: auto;
  margin-bottom: 28px;
  position: absolute;
  left: 10px;
`;

export const ProfImage = styled.img`
  width: 20vw;
  height: auto;
  margin-bottom: 28px;
`;

export const NavBar = styled.section`
  background-color: #d0fc60;
  padding: 8px;
`;

export const Card = styled.section`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const HeadCard = styled.section`
  display: flex;
  width: 70%;
  margin-top: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  justify-content: space-between;
`;

export const MainCard = styled.section`
  margin-top: 40px;
  //display: flex;
  flex-direction: column;
  align-items: center;
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

export const Loginst = styled.div`
  height: 100vh;
  background-color: #D0F5BE;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 80px 0px 0px 80px;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  h2 {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  width: 40%;
  height: 30px;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8f5db9;
  color: white;
  border: none;
`;

export const InputWrapper = styled.div`
  //display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-right: 60px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #8f5db9;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #8f5db9;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;
