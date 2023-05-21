import styled from "styled-components";

export const Container = styled.section`
  background-color: red;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Sidebar = styled.section`
  height: 100vh;
  width: 20%;
  background-color: yellow;
`;

export const Portal = styled.section`
  height: 100vh;
  width: 80%;
  background-color: blue;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
`;

export const LogoImage = styled.img`
  width: 15vw;
`;

