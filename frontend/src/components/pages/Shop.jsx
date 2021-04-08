import styled from "styled-components";
import { Canvas } from "react-three-fiber";

import Scene from "../modules/Shop3D/Scene";
import Button from "../elements/Button";
import ShopProperty from "../modules/ShopProperty";

export default function Shop() {
  return (
    <Container>
      <Canvas>
        <Scene />
      </Canvas>
      <PropertyContainer>
        <ShopProperty />
        <Price>NaN€</Price>
        <Button>order</Button>
      </PropertyContainer>
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const PropertyContainer = styled.section`
  border-left: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.primary};
`;
