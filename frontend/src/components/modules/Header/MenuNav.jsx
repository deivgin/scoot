import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuNav({ open }) {
  return (
    <Nav open={open}>
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
  );
}

//Styles
const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.white};
  top: 4rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.1rem solid ${({ theme }) => theme.color.black};
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-10rem)")};

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
