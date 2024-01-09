import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 12px 32px;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;

  &.flex_end {
    justify-content: flex-end;
  }
`;

export const PageTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1A181E;
`;

export const HelpSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;
