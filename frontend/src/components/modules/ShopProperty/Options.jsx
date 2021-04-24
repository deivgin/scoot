import styled from "styled-components";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl, AiOutlineFileImage } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";
import Option from "./Option";

export default function Options({ data, handleTabChange }) {
  const generateButton = (name) => {
    switch (name) {
      case "wheels":
        return <GiCarWheel />;
      case "speed":
        return <IoSpeedometerOutline />;
      case "controls":
        return <AiOutlineControl />;
      case "material":
        return <MdTexture />;
      default:
        return <AiOutlineFileImage />;
    }
  };
  return (
    <Tabs>
      {data.tabs.map((item, index) => (
        <Button
          key={index}
          type="button"
          active={item.name === data.currTab.name}
          onClick={() => handleTabChange(item)}
        >
          {generateButton(item.name)}
        </Button>
      ))}
      <h2>{data.currTab.name}</h2>
      {data.currTab.data.map((item) => (
        <Option key={item.id} name={item.name} />
      ))}
    </Tabs>
  );
}

//Styles
const Tabs = styled.div`
  //border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: options-start / options-end;
  margin: 0.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 0.5rem;
`;
