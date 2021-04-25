import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import Scene from "../modules/Shop3D/Scene";
import ShopProperty from "../modules/ShopProperty";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const product = useSelector((state) => state.product);
  console.log(product);
  useEffect(() => {
    product.options && product.price && setLoading(false);
  }, [product]);
  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Canvas>
          <Scene />
        </Canvas>
      )}

      <ShopProperty />
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.screenSize.laptop}) {
    grid-template-columns: 1fr;
  }
`;
