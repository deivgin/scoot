import { useState, useEffect } from "react";
import { Form, OrderButton, Price, StyledLoader } from "./index.styles";
import Options from "./Options";

//Saves state of product to global Product state

export default function ShopProperty() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currTab, setCurrTab] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:1337";
      try {
        const wheelsResponse = await fetch(`${url}/wheels`);
        const wheelsData = await wheelsResponse.json();
        const speedResponse = await fetch(`${url}/speeds`);
        const speedData = await speedResponse.json();
        const controlsResponse = await fetch(`${url}/controls`);
        const controlsData = await controlsResponse.json();
        const materialResponse = await fetch(`${url}/materials`);
        const materialData = await materialResponse.json();
        console.log(wheelsData);
        setData([
          { name: "wheels", data: wheelsData },
          { name: "speed", data: speedData },
          { name: "controls", data: controlsData },
          { name: "material", data: materialData },
        ]);
        setCurrTab(wheelsData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(data, currTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submited");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {isLoading || !data || !currTab ? (
          <StyledLoader
            type="ThreeDots"
            color="#414141"
            height={80}
            width={80}
          />
        ) : (
          <>
            <Options data={data} currTab={currTab} />
            <Price>NaN€</Price>
            <OrderButton>order</OrderButton>
          </>
        )}
      </Form>
    </>
  );
}
