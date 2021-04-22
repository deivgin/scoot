import styled from "styled-components";
import { GiCarWheel } from "react-icons/gi";
// import { MdTexture } from "react-icons/md";
// import { AiOutlineControl } from "react-icons/ai";
// import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";

export default function Options() {
  return (
    <Tabs>
      <Button type="button">
        <GiCarWheel />
      </Button>
    </Tabs>
  );
}

//Styles
const Tabs = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: options-start / options-end;
  margin: 0.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 0.5rem;
`;
