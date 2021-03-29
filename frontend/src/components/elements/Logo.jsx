import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Logo({ children }) {
  return (
    <LogoContainer>
      <Link to="/">{children}</Link>
    </LogoContainer>
  );
}

//Styles
const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  color: ${({ theme }) => theme.color.primaryLight};
`;
