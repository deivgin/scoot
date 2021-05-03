import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>© 2021 Deividas Gineitis. All Rights Reserved</p>
    </StyledFooter>
  );
}

//Styles
const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.color.greyDark};
  color: ${({ theme }) => theme.color.grey};
  text-align: center;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
