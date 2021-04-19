import { useState, useEffect } from "react";
import { Form, OrderButton, Price, Tabs } from "./index.styles";
import Options from "./Options";

export default function ShopProperty() {
  const [wheels, setWheels] = useState([]);
  const [controls, setControls] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState({});

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

  console.log(wheels, controls, materials, speed);

  return (
    <Form>
      <Options />
      <Price>NaN€</Price>
      <OrderButton>order</OrderButton>
    </Form>
  );
}
