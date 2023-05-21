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

export const Card = styled.section`
  background-color: #D9D9D9;
  height: 40vh;
  margin: 24px;
  border-radius: 25px;
`;

export const Portal = styled.section`
  height: 100vh;
  width: 80vw;
  background-color: #FFFFFF;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
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
  color: #c058d0;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-top: 8px;
  margin-left: 12px;
`;

export const AtendText = styled.h1`
  font-size: 12px;
  color: black;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-top: 40px;
  margin-left: 24px;
`;

export const SearchInput = styled.input`
  width: 30vw;
  height: 30px;
  padding: 5px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 280px;
  margin-bottom: 10px;
  border-radius: 31px;
  border: 1px solid #ccc;
`;
