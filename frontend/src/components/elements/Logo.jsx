import styled from "styled-components";

export default function Logo({ children }) {
  return <LogoContainer>{children}</LogoContainer>;
}

//Styles
const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`;
