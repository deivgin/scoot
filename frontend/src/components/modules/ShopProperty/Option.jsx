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
  grid-column: 1 / -1;
  align-self: center;
  border: 0.1rem ${(props) => (props.active ? "dashed" : "solid")}${({ theme }) => theme.color.primaryLight};
  height: 100%;
  position: relative;

  :hover {
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }
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
