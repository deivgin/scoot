import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function MenuNav({ open }) {
  return (
    <Nav open={open}>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/signin">Sign In</Link>
    </Nav>
  );
}

//Styles
const Nav = styled.nav`
  position: absolute;
  top: 6rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.1rem solid ${({ theme }) => theme.color.black};
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-10rem)")};

  a {
    color: ${({ theme }) => theme.color.primary};
    margin: 1rem;
    margin-right: 2rem;
    border-bottom: 0.2rem dashed transparent;

    :hover {
      border-bottom: 0.2rem dashed ${({ theme }) => theme.color.primary};
    }
  }
`;
