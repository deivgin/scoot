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
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.primaryLight};
`;
