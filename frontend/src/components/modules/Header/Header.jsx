import styled from "styled-components";
import Logo from "../../elements/Logo";
import Cart from "../../elements/Cart";
import Hamburg from "../../elements/Hamburg";
import { useState } from "react";
import MenuNav from "./MenuNav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Hamburg open={navOpen} setOpen={setNavOpen} />
      {navOpen && <MenuNav open={navOpen} />}
      <Logo>ScooT</Logo>
      <Cart />
    </StyledHeader>
  );
}

//Styles
const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
  background-color: inherit;

  grid-column: content-start/content-end;
  grid-row: header-start / header-end;
`;
