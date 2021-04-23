import { Form, OrderButton, Price } from "./index.styles";
import Options from "./Options";

export default function ShopProperty() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submited");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Options />
      <Price>NaN€</Price>
      <OrderButton>order</OrderButton>
    </Form>
  );
}
