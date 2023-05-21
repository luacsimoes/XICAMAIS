import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Sidebar = styled.section`
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Portal = styled.section`
  height: 100vh;
  width: 80vw;
  background-color: blue;
`;

export const InfoContainer = styled.section`
display: flex;
flex-direction: row;
`;


export const Content = styled.section`
  display: flex;
  flex-direction: row;
`;

export const LogoImage = styled.img`
  width: 12vw;
  height: 12vh;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const IconImage = styled.img`
  width: 8vw;
  height: 8vw;
`;

export const Name = styled.h1`
  font-size: 12px;
  color: black;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-top: 16px;
`;

export const Age = styled.h1`
  font-size: 12px;
  color: black;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-top: 8px;
`;

export const InfoText = styled.h1`
  font-size: 12px;
  color: #C058D0;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-top: 8px;
`;