import { useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import Options from "./Options";

export default function ShopProperty() {
  const [productType, setProductType] = useState({
    wheel: "wheel1",
  });
  const handleChange = (e) => {
    setProductType({
      ...productType,
      wheel: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productType);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Options handleChange={handleChange} checkedItem={productType.wheel} />
      <Price>NaN€</Price>
      <OrderButton type="submit">order</OrderButton>
    </Container>
  );
}

//Styles
const Container = styled.form`
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
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0.5rem;
`;

const Price = styled.span`
  grid-column: content-start / content-end;
  grid-row: price-start / price-end;
  justify-self: center;
  align-self: end;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 0.5rem;
`;
