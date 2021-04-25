import styled from "styled-components";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl, AiOutlineFileImage } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";
import Option from "./Option";
import { useSelector, useDispatch } from "react-redux";

export default function Options({ tabData, handleTabs }) {
  const product = useSelector((state) => state.product);

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
  console.log(tabData.currTab);
  const currTabProduct = product.options.find(
    (item) => item.name === tabData.currTab.name
  );
  console.log(currTabProduct);
  return (
    <Tabs>
      {tabData.tabs.map((item, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => handleTabs(item)}
          active={item.name === tabData.currTab.name}
        >
          {generateButton(item.name)}
        </Button>
      ))}
      <h2>{tabData.currTab.name}</h2>
      {tabData.currTab.data.map((item) => {
        return <Option key={item.id} name={item.name} value={item} checked={item.name === currTabProduct.data.name}/>;
      })}
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
