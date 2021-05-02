import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const fadeInSide = useSpring({
    config: { mass: 2, tension: 150 },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const fadeInTop = useSpring({
    config: { tension: 200 },
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
  });
  return (
    <Section>
      <Header style={fadeInSide}>
        ScooT
        <span>MK1</span>
      </Header>
      <P style={fadeInTop}>Fastest scooter ever</P>
    </Section>
  );
}

const Section = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled(animated.h1)`
  font-size: 8rem;

  span {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const P = styled(animated.p)`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
