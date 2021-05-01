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
import { device } from "../../../styles/devices";

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
        <TabsButton
          key={index}
          inverted
          type="button"
          onClick={() => handleTabs(item)}
          active={item.name === tabData.currTab.name}
        >
          {generateButton(item.name)}
        </TabsButton>
      ))}
      <OptionName>{tabData.currTab.name}</OptionName>
      <OptionContainer>
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
      </OptionContainer>
    </Tabs>
  );
}

//Styles
const Tabs = styled.div`
  grid-column: content-left-start / content-right-end;
  grid-row: options-start / options-end;
  margin: 0.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 8rem 6rem repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 0.5rem;

  @media ${device.mobileL} {
    column-gap: 0.5rem;
  }
`;

const TabsButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.exLarge};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ active, theme }) => active && theme.color.white};
  background-color: ${({ active, theme }) => active && theme.color.black};

  @media ${device.mobileL} {
    padding: 0.2rem;
  }
`;

const OptionName = styled.h2`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.black};
`;

const OptionContainer = styled.div`
  grid-column: 1 / -1;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

//PropTypes
Options.propTypes = {
  tabData: PropTypes.object.isRequired,
  handleTabs: PropTypes.func.isRequired,
};
