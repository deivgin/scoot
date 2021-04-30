import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeValue, calcTotal } from "../../../redux/Product/product.actions";
import PropTypes from "prop-types";
import Option from "./Option";
import Button from "../../elements/Button";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl, AiOutlineFileImage } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function Options({ tabData, handleTabs }) {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const currTabProduct = product.options.find(
    (item) => item.name === tabData.currTab.name
  );

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

  const handleInputChange = (e) => {
    const parsedValue = JSON.parse(e.target.value);
    const foundValue = product.options.map((item) =>
      item.name === currTabProduct.name
        ? { name: item.name, data: parsedValue }
        : item
    );
    dispatch(changeValue(foundValue));
    dispatch(calcTotal());
    console.log(product);
  };

  return (
    <Tabs>
      {tabData.tabs.map((item, index) => (
        <Button
          key={index}
          inverted
          type="button"
          onClick={() => handleTabs(item)}
          active={item.name === tabData.currTab.name}
        >
          {generateButton(item.name)}
        </Button>
      ))}
      <OptionName>{tabData.currTab.name}</OptionName>
      {tabData.currTab.data.map((item) => {
        return (
          <Option
            key={item.id}
            name={item.name}
            price={item.price}
            value={JSON.stringify(item)}
            checked={item.name === currTabProduct.data.name}
            onChange={handleInputChange}
          />
        );
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
  grid-template-rows: 4fr 3.5fr repeat(4, 1fr);
  row-gap: 0.5rem;
`;

const OptionName = styled.h2`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  align-self: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.primaryDark};
`;

//PropTypes
Options.propTypes = {
  tabData: PropTypes.object.isRequired,
  handleTabs: PropTypes.func.isRequired,
};
