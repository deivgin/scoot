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
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  grid-column: padding-left-start / padding-right-end;
  grid-row: footer-start / footer-end;

  ul {
    margin: 0;
  }
`;
