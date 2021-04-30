import styled from "styled-components";
import { animated } from "react-spring";

export default function Home() {
  return <Container>Home Page</Container>;
}

const Container = styled.div`
  height: 95vh;
`;

const Header = styled(animated.h1)``;
