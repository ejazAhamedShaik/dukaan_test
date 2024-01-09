import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; /* Header and main body */
  height: 100vh;
`;

export const Header = styled.header`
  border: 1px solid #d9d9d9;
`;

export const MainBody = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background: rgba(26, 24, 30, 0.04);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionHeading = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const CardsSection = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeadingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px 12px 24px 12px;
  border-radius: 8px;
  gap: 8px;

  .searchbar {
    width: 248px;
  }
`

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`
export const Button = styled.button`
  display: flex;
  gap: 6px;
  border: 1px solid #D9D9D9;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4D4D4D;
`