import styled from "styled-components";
import Logo from "../elements/Logo";
import Cart from "../elements/Cart";
import Hamburg from "../elements/Hamburg";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Hamburg open={navOpen} setOpen={setNavOpen} />
      <Logo>ScooT</Logo>
      <Cart />
    </StyledHeader>
  );
}

//Styles
const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primaryLight};
`;
