import styled, { cs } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MenuNav({ open, menuRef }) {
  const [navX, setNavX] = useState(30);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setNavX(0);
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <>
      <Nav open={open} ref={menuRef} navX={navX}>
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
      <NavBackground />
    </>
  );
}

//Styles
const NavBackground = styled.div`
  width: 80vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity = 50);
`;

const Nav = styled.nav`
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
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.1rem solid ${({ theme }) => theme.color.black};
  transition: 1s ease;
  transform: ${({ open, navX }) =>
    open ? `transform(${navX}rem)` : `teansform(${navX}rem)`};
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
