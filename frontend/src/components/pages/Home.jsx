import styled from "styled-components";
import HomePageScroll from "../modules/HomePageScroll";

export default function Home() {
  return (
    <Container>
      <HomePageScroll />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 89vh; //i think this eint good
  overflow: hidden;
  background: #999;
  position: relative;
`;
