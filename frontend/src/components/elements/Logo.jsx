import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/devices";

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
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  color: inherit;

  @media ${device.mobileL} {
    ${({ theme }) => theme.fontSize.small};
  }
`;
