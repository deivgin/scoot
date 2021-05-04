import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changeValue, calcTotal } from "../../../redux/Product/product.actions";
import { addToCart } from "../../../redux/Cart/cart.actions";
import Options from "./Options";
import Button from "../../elements/Button";
import Loader from "react-loader-spinner";
import { device } from "../../../styles/devices";

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
          currTab: { name: "material", data: materialData },
          tabs: [
            { name: "material", data: materialData },
            { name: "wheels", data: wheelsData },
            { name: "speed", data: speedData },
            { name: "controls", data: controlsData },
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
    setIsLoading(true);
    dispatch(addToCart(product));
    setIsLoading(false);
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
    [pad-left-start] 3rem [pad-left-end content-left-start]
    1fr [content-left-end content-right-start]
    1fr [content-right-end pad-right-start]
    3rem [pad-right-end];
  grid-template-rows:
    [options-start] minmax(10rem, 1fr) [options-end order-start]
    8rem [order-end padding-start] 5rem [padding-end];

  @media ${device.laptop} {
    grid-template-columns:
      [content-left-start]
      1fr [content-left-end content-right-start]
      1fr [content-right-end];
  }
`;

const OrderButton = styled(Button)`
  grid-column: content-right-start / content-right-end;
  grid-row: order-start / order-end;
  margin: 0.5rem;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 0.5rem 4rem;
  align-self: end;
`;

const Price = styled.span`
  grid-column: content-left-start / content-left-end;
  grid-row: order-start / order-end;
  justify-self: center;
  align-self: end;
  font-size: ${({ theme }) => theme.fontSize.exLarge};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 0.5rem;
`;

const StyledLoader = styled(Loader)`
  grid-column: content-left-start / content-right-end;
  grid-row: options-start / option-end;
  align-self: center;
  justify-self: center;
`;
