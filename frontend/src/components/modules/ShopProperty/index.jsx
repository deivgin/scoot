import styled from "styled-components";
import Button from "../../elements/Button";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Options from "./Options";

export default function ShopProperty() {
  return (
    <Container>
      <Button type="property">
        <GiCarWheel />
      </Button>
      <Button type="property">
        <MdTexture />
      </Button>
      <Button type="property">
        <AiOutlineControl />
      </Button>
      <Button type="property">
        <IoSpeedometerOutline />
      </Button>
      <Options />
    </Container>
  );
}

//Styles
const Container = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
`;
