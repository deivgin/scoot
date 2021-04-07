import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({ children, type }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

//Styles
const StyledButton = styled.button`
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 10%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.primary};

  :hover {
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    color: ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }
`;

//Proptypes
Button.propTypes = {
  type: PropTypes.string,
};
