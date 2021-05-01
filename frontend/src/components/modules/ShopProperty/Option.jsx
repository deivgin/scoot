import PropTypes from "prop-types";
import styled from "styled-components";

export default function Option({ name, checked, price, ...props }) {
  return (
    <Container active={checked}>
      <StyledInput type="radio" name="option" {...props} />
      <StyledLabel htmlFor="option">
        <span>{name}</span>
        <span>{price}€</span>
      </StyledLabel>
    </Container>
  );
}

//Styles
const Container = styled.div`
  height: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  font-size: ${({ theme }) => theme.fontSize.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin: 0 1rem;
  }
`;
//PropTypes
Option.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};
