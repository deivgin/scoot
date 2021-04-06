import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  return (
    <StyledCart>
      <Icon />
      <Counter>0</Counter>
    </StyledCart>
  );
}

//Styles
const StyledCart = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.margin.header};
  color: ${({ theme }) => theme.color.primaryLight};
`;

const Icon = styled(FiShoppingCart)`
  font-size: 1.25rem;
  padding-right: 0.25rem;
`;

const Counter = styled.span`
  font-size: 1rem;
`;
