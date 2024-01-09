import { styled } from "styled-components";

export const NavTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`;

export const TagLine = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  border-bottom: 1px solid #fff;
  width: max-content;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`