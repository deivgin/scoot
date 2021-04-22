import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import Scene from "../modules/Shop3D/Scene";
import ShopProperty from "../modules/ShopProperty";

export default function Shop() {
  return (
    <Container>
      <Canvas>
        <Scene />
      </Canvas>
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
