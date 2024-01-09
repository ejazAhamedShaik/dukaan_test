// NavItem.styles.js

import styled from "styled-components";

export const NavItemContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.isActive ? "rgba(255, 255, 255, 0.1)" : "initial",
  },
}))`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const NavItemTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
