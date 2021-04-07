import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signin">Profile</Link>
        </li>
      </ul>
    </StyledFooter>
  );
}

//Styles
const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.white};
`;
