import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../../styles/devices";
import CartItemInfo from "./CartItemInfo";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/Cart/cart.actions";

export default function CartTable({ product }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <ProductImage>Image</ProductImage>
      <CartItemInfo options={product.options} />
      <PriceAndRemove>
        <p>Price: {product.price}€</p>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove
        </button>
      </PriceAndRemove>
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: grid;
  grid-template-columns:
    [image-start] 0.5fr
    [image-end info-start] 1fr
    [info-end remove-start] 0.5fr [remove-end];
  margin: 2rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};

  @media ${device.mobileL} {
    grid-template-columns:
      [left-start] 0.5fr
      [left-end right-start] 1fr [right-end];
    grid-template-rows:
      [img-info-start] 1fr
      [img-info-end remove-start] 1fr [remove-end];
  }

  div {
    align-self: start;
    justify-self: center;
  }
`;

const ProductImage = styled.div`
  grid-column: image-start / image-end;
  grid-row: image-start / image-end;

  @media ${device.mobileL} {
    grid-column: left-start / left-end;
    grid-row: img-info-start / img-info-end;
  }
`;

const PriceAndRemove = styled.div`
  grid-column: remove-start / remove-end;
  grid-row: remove-start / remove-end;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fontSize.medium};
  @media ${device.mobileL} {
    grid-column: left-start / right-end;
    flex-direction: row;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

//PropTypes
CartTable.propTypes = {
  product: PropTypes.object.isRequired,
};
