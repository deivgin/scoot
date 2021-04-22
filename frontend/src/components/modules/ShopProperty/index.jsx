import { Form, OrderButton, Price } from "./index.styles";
import Options from "./Options";

export default function ShopProperty() {
  return (
    <Form>
      <Options />
      <Price>NaN€</Price>
      <OrderButton>order</OrderButton>
    </Form>
  );
}
