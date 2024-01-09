import styled from "styled-components";

export const NavFooterWrapper = styled.div`
  padding: 6px 12px;
  display: flex;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  padding: 6px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  justify-content: center;

  .heading {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
  .value {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
