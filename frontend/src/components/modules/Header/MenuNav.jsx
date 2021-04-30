import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function MenuNav({ open, menuRef }) {
  const transform = useSpring({
    from: { transform: "translateX(30rem)" },
    to: { transform: "translateX(0)" },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <>
      <Nav style={transform} open={open} ref={menuRef}>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign up</Link>
          </li>
        </ul>
      </Nav>
      <NavBackground styles={fadeIn} />
    </>
  );
}

//Styles
const NavBackground = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity = 50);
`;

const Nav = styled(animated.nav)`
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  top: 0;
  right: 0;
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.exLarge};
  border: 0.1rem solid ${({ theme }) => theme.color.black};

  a {
    color: ${({ theme }) => theme.color.primary};
    border-bottom: 0.2rem dashed transparent;
    :hover {
      border-bottom: 0.2rem dashed ${({ theme }) => theme.color.primary};
    }
  }

  ul {
    list-style: none;
    margin: 1rem;
    padding: 0;

    li:not(last-child) {
      margin-bottom: 1rem;
    }
  }
`;
