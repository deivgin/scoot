import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { animated } from "react-spring";

export default function MenuNav({ open, setOpen, menuRef, style }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <>
      <Nav style={style} open={open} ref={menuRef}>
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/sign-in" onClick={() => setOpen(false)}>
              Sign in
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
}

//Styles

const Nav = styled(animated.nav)`
  position: absolute;
  z-index: 20;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.exLarge};

  a {
    color: ${({ theme }) => theme.color.white};
    border-bottom: 0.2rem solid transparent;
    :hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.color.white};
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
