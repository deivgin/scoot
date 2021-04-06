import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({ children, type }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

//Styles
const StyledButton = styled.button`
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 10%;
`;

//Proptypes
Button.propTypes = {
  type: PropTypes.string,
};
