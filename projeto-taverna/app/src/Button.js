import styled from "styled-components";

const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f0a13a" : "#d9953c")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#d9953c")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background: #EAA64D;
  }
`;

export default Button;