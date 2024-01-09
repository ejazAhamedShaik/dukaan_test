import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8f9fa; /* Pale while background */
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 9px 16px; /* Adjust padding as needed */
  width: 100%;
`;

export const SearchField = styled.input`
  /* background-color: #f8f9fa; 
  border: 1px solid #ddd; */
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;

  &::placeholder {
    color: #808080;
  }
`;
