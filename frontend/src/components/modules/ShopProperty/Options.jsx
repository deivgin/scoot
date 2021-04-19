import styled from "styled-components";
import Button from "../../elements/Button";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function Options({ handleChange, checkedItem }) {
  const change = () => console.log("change")

  return (
    <Container>
      <Button type="button" onClick={change}>
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
      <h1>wheels</h1>
      <hr />
      <input
        type="radio"
        name="test"
        value="wheel1"
        onChange={handleChange}
        checked={checkedItem === "wheel1"}
      />
      <label htmlFor="test">Test</label>
      <input
        type="radio"
        name="test"
        value="wheel2"
        onChange={handleChange}
        checked={checkedItem === "wheel2"}
      />
      <label htmlFor="test2">Test2</label>
    </Container>
  );
}

//Styles
const Container = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: options-start / options-end;
  margin: 0.5rem;
`;
