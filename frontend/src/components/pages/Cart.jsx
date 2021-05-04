import styled from "styled-components";
import { useSelector } from "react-redux";
import { CartItem, CartTotal } from "../modules/Cart";
import { device } from "../../styles/devices";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <CartItemContainer>
        <h1>Cart</h1>
        {cart.items.length > 0 ? (
          cart.items.map((item, index) => (
            <CartItem key={index} product={item} />
          ))
        ) : (
          <div>No items</div>
        )}
      </CartItemContainer>
      <CartTotal total={cart.total} length={cart.items.length} />
    </Container>
  );
}

//Styles
const Container = styled.section`
  margin: 3rem;
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr 0.5fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    div {
      border-radius: 0;
    }
  }
`;

const CartItemContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
