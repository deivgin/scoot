import styled from "styled-components";
import Button from "../../elements/Button";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function Options() {
  return (
    <Container>
      <Button>
        <GiCarWheel />
      </Button>
      <Button>
        <MdTexture />
      </Button>
      <Button>
        <AiOutlineControl />
      </Button>
      <Button>
        <IoSpeedometerOutline />
      </Button>
    </Container>
  );
}

//Styles
const Container = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: options-start / options-end;
`;
