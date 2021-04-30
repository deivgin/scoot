import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}

//Styles
const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyDark};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;
