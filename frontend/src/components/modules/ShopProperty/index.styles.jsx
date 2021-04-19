import Button from "../../elements/Button";
import styled from "styled-components";

const Form = styled.form`
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

const Tabs = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: options-start / options-end;
  margin: 0.5rem;
`;

export { Form, OrderButton, Price, Tabs };

//Button icons
// import { GiCarWheel } from "react-icons/gi";
// import { MdTexture } from "react-icons/md";
// import { AiOutlineControl } from "react-icons/ai";
// import { IoSpeedometerOutline } from "react-icons/io5";
