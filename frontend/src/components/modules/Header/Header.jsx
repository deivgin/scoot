import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../../elements/Logo";
import Cart from "../../elements/Cart";
import Hamburg from "./Hamburg";
import MenuNav from "./MenuNav";
import { BiUser } from "react-icons/bi";
import { useTransition } from "react-spring";
import { Link, useLocation } from "react-router-dom";
import Button from "../../elements/Button";
import useViewport from "../../../hooks/useViewport";
import { size } from "../../../styles/devices";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();
  const { width } = useViewport();

  const transitions = useTransition(navOpen, {
    from: { x: width, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: width, opacity: 0 },
  });

  return (
    <StyledHeader location={location.pathname}>
      <Logo>ScooT</Logo>
      <Navigation>
        {location.pathname === "/" && width > size.mobileL && (
          <Button>
            <Link to="shop">shop</Link>
          </Button>
        )}
        <Cart />
        <ProfileButton>
          <BiUser />
        </ProfileButton>
        {transitions(
          (style, item) =>
            item && (
              <MenuNav
                style={style}
                open={navOpen}
                setOpen={setNavOpen}
                menuRef={menuRef}
              />
            )
        )}
        <Hamburg
          open={navOpen}
          setOpen={setNavOpen}
          location={location.pathname}
        />
      </Navigation>
    </StyledHeader>
  );
}

//Styles
const StyledHeader = styled.header`
  position: relative;
  background-color: ${({ location, theme }) =>
    location === "/" ? theme.color.white : theme.color.black};
  color: ${({ location, theme }) =>
    location === "/" ? theme.color.black : theme.color.white};

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
    margin-left: 3rem;
  }
`;

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 1.5rem;
`;
