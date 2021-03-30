import styled from "styled-components";
import { Canvas } from "react-three-fiber";

function Cube() {
  return (
    <mesh rotation={[0, 10, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function HomePageSection() {
  return (
    <Container>
      <Canvas>
        <Cube />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </Container>
  );
}

//Styles
const Container = styled.section`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  height: 70vh;
  margin-top: 3rem;
`;
