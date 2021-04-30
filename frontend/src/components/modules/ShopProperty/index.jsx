import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changeValue, calcTotal } from "../../../redux/Product/product.actions";
import Options from "./Options";
import Button from "../../elements/Button";
import Loader from "react-loader-spinner";

export default function ShopProperty() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

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
        setData({
          currTab: { name: "wheels", data: wheelsData },
          tabs: [
            { name: "wheels", data: wheelsData },
            { name: "speed", data: speedData },
            { name: "controls", data: controlsData },
            { name: "material", data: materialData },
          ],
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const setDefaultProduct = () => {
    dispatch(
      changeValue(
        data.tabs.map((item) => ({
          name: item.name,
          data: item.data[0],
        }))
      )
    );
    dispatch(calcTotal());
  };

  data && !product.options && setDefaultProduct();

  const handleTabs = (tab) => {
    setData({ ...data, currTab: tab });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {isLoading || !data ? (
          <StyledLoader
            type="ThreeDots"
            color="#414141"
            height={80}
            width={80}
          />
        ) : (
          <>
            <Options tabData={data} handleTabs={handleTabs} />
            <Price>{product.price}€</Price>
            <OrderButton>order</OrderButton>
          </>
        )}
      </Form>
    </>
  );
}

//Styles
const Form = styled.form`
  display: grid;
  grid-template-columns:
    [pad-left-start] 3rem [pad-left-end content-start]
    auto [content-end pad-right-start] 3rem [pad-right-end];
  grid-template-rows:
    [options-start] 1fr [options-end price-start]
    0.25fr [price-end button-start] 0.25fr [button-end];
`;

const OrderButton = styled(Button)`
  grid-column: content-start / content-end;
  grid-row: button-start / button-end;
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0.5rem;
`;

const Price = styled.span`
  grid-column: content-start / content-end;
  grid-row: price-start / price-end;
  justify-self: center;
  align-self: end;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 0.5rem;
`;

const StyledLoader = styled(Loader)`
  grid-column: content-start / content-end;
  grid-row: options-start / option-end;
  align-self: center;
  justify-self: center;
`;
