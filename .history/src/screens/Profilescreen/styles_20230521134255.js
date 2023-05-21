import styled from "styled-components";

export const Container = styled.section`
  background-color: red;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Sidebar = styled.section`
  height: 100vh;
  width: 20vw;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Portal = styled.section`
  height: 100vh;
  width: 80vw;
  background-color: blue;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
`;

export const LogoImage = styled.img`
  width: 15vw;
  height: 15vw;
`;
