import styled from "styled-components";
import { device } from "../../../styles/devices";

export default function CartItemInfo({ options }) {
  return (
    <Container>
      {options.map((item, index) => (
        <p key={index}>
          {item.name}
          <span>{item.data.name}</span>
          <span>{item.data.price}€</span>
        </p>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: info-start / info-end;
  grid-row: info-start / info-end;

  @media ${device.mobileL} {
    grid-column: right-start / right-end;
    grid-row: img-info-start / img-info-end;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin: 0.25rem;
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.grey};
    margin-left: 1rem;

    span {
      font-weight: bold;
      margin-left: 1rem;
    }
  }
`;
