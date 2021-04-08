import styled from "styled-components";
import Button from "../../elements/Button";
import Options from "./Options";

export default function ShopProperty() {
  return (
    <Container>
      <Options />
      <Price>NaN€</Price>
      <OrderButton>order</OrderButton>
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: grid;
  grid-template-columns:
    [pad-left-start] 3rem [pad-left-end content-start]
    auto [content-end pad-right-start] 3rem [pad-right-end];
  grid-template-rows:
    [options-start] 1fr [options-end price-start]
    0.25fr [price-end button-start] 0.25fr [button-end];
  border-left: 0.1rem solid ${({ theme }) => theme.color.primary};
`;

const OrderButton = styled(Button)`
  grid-column: content-start / content-end;
  grid-row: button-start / button-end;
`;

const Price = styled.span`
  grid-column: content-start / content-end;
  grid-row: price-start / price-end;
`;
