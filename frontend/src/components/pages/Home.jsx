import styled from "styled-components";
import Header from "../modules/Header";
import HomeCanvas from "../modules/HomeCanvas";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HomeCanvas />
      </Container>
    </>
  );
}

//Styles
const Container = styled.section`
  height: 70vh;
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  margin-top: 3rem;
`;
