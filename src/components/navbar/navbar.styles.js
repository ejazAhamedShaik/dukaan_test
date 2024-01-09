import styled from "styled-components";

export const NavGridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, main, footer */
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
  padding: 16px 8px;
  grid-gap: 24px;
`;

export const Header = styled.header`
  grid-area: header;
  background-color: #f0f0f0; /* Customize header appearance */
  padding: 20px;
`;

export const MainBody = styled.main`
  grid-area: main;
`;

export const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
  position: sticky;
  bottom: 0;
`;
