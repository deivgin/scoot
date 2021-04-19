import { useState, useEffect } from "react";
import { Tabs } from "./index.styles";
import { GiCarWheel } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "../../elements/Button";
import Option from "./Option";

export default function Options() {
  const [currTab, setCurrTab] = useState();
  const [wheels, setWheels] = useState([]);
  const [controls, setControls] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [speed, setSpeed] = useState([]);

  useEffect(() => {
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
      {!currTab ? (
        <h3>Choose Option</h3>
      ) : (
        currTab.map((option) => (
          <Option key={option.id} name={option.name} price={option.price} />
        ))
      )}
    </Tabs>
  );
}

// <Button onClick={click} type="button">
//         <GiCarWheel />
//       </Button>
