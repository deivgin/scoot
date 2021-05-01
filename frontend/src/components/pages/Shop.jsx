import styled from "styled-components";
import Scene from "../modules/Shop3D/Scene";
import ShopProperty from "../modules/ShopProperty";
import { device } from "../../styles/devices";

export default function Shop() {
  return (
    <Container>
      <Scene />
      <ShopProperty />
    </Container>
  );
}

//Styles
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 90vh;
  margin-top: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 75vh 80vh;
  }
`;
