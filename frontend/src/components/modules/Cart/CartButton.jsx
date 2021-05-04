import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartButton() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <StyledCart>
      <Link to="/cart">
        <Icon />
        <Counter>{cartItems.length}</Counter>
      </Link>
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
  color: inherit;
`;

const Icon = styled(FiShoppingCart)`
  font-size: 1.25rem;
  padding-right: 0.25rem;
`;

const Counter = styled.span`
  font-size: 1rem;
`;
