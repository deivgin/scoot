import styled from "styled-components";
import { useSelector } from "react-redux";

export default function ProductInfo() {
  const { options, price } = useSelector((state) => state.product);
  return (
    <OrderInfo>
      {!options ? (
        <div>Loading...</div>
      ) : (
        options.map((item, index) => (
          <P key={index}>
            {item.name}
            <span>{item.data.name}</span>
          </P>
        ))
      )}
      {!options ? (
        ""
      ) : (
        <P>
          price
          <span>{price}€</span>
        </P>
      )}
    </OrderInfo>
  );
}

//Styles
const OrderInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.grey};
  margin-left: 1rem;

  span {
    font-weight: bold;
    margin-left: 1rem;
  }
`;
