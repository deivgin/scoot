import { useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../../elements/Logo";
import Cart from "../../elements/Cart";
import Hamburg from "./Hamburg";
import MenuNav from "./MenuNav";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { BiUser } from "react-icons/bi";
import Button from "../../elements/Button";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef();
  useOutsideClick(menuRef, () => {
    if (navOpen) setNavOpen(false);
  });

  return (
    <StyledHeader>
      <Logo>ScooT</Logo>
      <Navigation>
        <Button inverted>shop</Button>
        <Cart />
        <ProfileButton>
          <BiUser />
        </ProfileButton>
        <Hamburg open={navOpen} setOpen={setNavOpen} />
        {navOpen && <MenuNav open={navOpen} menuRef={menuRef} />}
      </Navigation>
    </StyledHeader>
  );
}

//Styles
const StyledHeader = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    padding-left: 3rem;
  }
`;

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
`;
