import styled from "styled-components";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";
import useTabs from "../../../hooks/useTabs";
import Option from "./Option";
import { useEffect } from "react";

export default function Options() {
  const { tabs, currTab, setCurrTab } = useTabs();

  useEffect(() => {
    tabs && setCurrTab(tabs[0]);
  }, []);

  const generateButtons = (name) => {
    switch (name) {
      case "wheels":
        return <GiCarWheel />;
      case "speeds":
        return <IoSpeedometerOutline />;
      case "materials":
        return <MdTexture />;
      case "controls":
        return <AiOutlineControl />;
      default:
        return <div>Button</div>;
    }
  };
  return (
    <Tabs>
      {!tabs && <div>Loading...</div>}
      {tabs &&
        tabs.map((tab) => (
          <Button
            key={tab.id}
            type="button"
            active={tab.name === currTab.name}
            onClick={() => setCurrTab(tab)}
          >
            {generateButtons(tab.name)}
          </Button>
        ))}
      {currTab.data.response.map((option) => (
        <Option name={option.name} />
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
