import styled from "styled-components";
import { Canvas } from "react-three-fiber";

import Scene from "../modules/Shop3D/Scene";

export default function Shop() {
  return (
    <Container>
      <Canvas>
        <Scene />
      </Canvas>
      <PropertyContainer></PropertyContainer>
    </Container>
  );
}

//Styles
const Container = styled.div`
  height: 70vh;
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  display: grid;
`;

const PropertyContainer = styled.div`
  width: 50%;
  height: 100%;
`;
