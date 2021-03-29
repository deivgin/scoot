import styled from "styled-components";
import Logo from "../elements/Logo";
import Cart from "../elements/Cart";
import Hamburg from "../elements/Hamburg";

export default function Header() {
  return (
    <StyledHeader>
      <Hamburg />
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
