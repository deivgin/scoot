import styled from "styled-components";
import { useState, useEffect } from "react";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";
import Option from "./Option";
import Loader from "react-loader-spinner";

export default function Options() {
  const [wheels, setWheels] = useState([]);
  const [controls, setControls] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [currTab, setCurrTab] = useState([]);

  useEffect(() => {
    let isCanceled = false;
    const getWheels = async () => {
      const response = await fetch("http://localhost:1337/wheels");
      const data = await response.json();
      setWheels(data);
    };
    const getControls = async () => {
      const response = await fetch("http://localhost:1337/controls");
      const data = await response.json();
      setControls(data);
    };
    const getMaterials = async () => {
      const response = await fetch("http://localhost:1337/materials");
      const data = await response.json();
      setMaterials(data);
    };
    const getSpeed = async () => {
      const response = await fetch("http://localhost:1337/speeds");
      const data = await response.json();
      setSpeed(data);
    };
    getWheels();
    getControls();
    getMaterials();
    getSpeed();
    return () => (isCanceled = true);
  }, []);

  return (
    <Tabs>
      <Button type="button" onClick={() => setCurrTab(wheels)}>
        <GiCarWheel />
      </Button>
      <Button type="button" onClick={() => setCurrTab(controls)}>
        <AiOutlineControl />
      </Button>
      <Button type="button" onClick={() => setCurrTab(materials)}>
        <MdTexture />
      </Button>
      <Button type="button" onClick={() => setCurrTab(speed)}>
        <IoSpeedometerOutline />
      </Button>
      {currTab.map((option) => (
        <Option key={option.id} name={option.name} price={option.price} />
      ))}
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
