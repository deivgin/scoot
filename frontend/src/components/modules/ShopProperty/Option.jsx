import PropTypes from "prop-types";
import styled from "styled-components";

export default function Option({ name, checked, price, ...props }) {
  return (
    <Container active={checked}>
      <StyledInput type="radio" name="option" {...props} />
      <StyledLabel htmlFor="option">{name}</StyledLabel>
      <StyledImage active={checked} />
      <StyledPrice>
        <span>{price}€</span>
      </StyledPrice>
    </Container>
  );
}

//Styles
const Container = styled.div`
  position: relative;
  text-align: center;
  background-color: ${({ active, theme }) => active && theme.color.black};
  color: ${({ active, theme }) => active && theme.color.white};
  border: 3px solid
    ${({ active, theme }) => (active ? "transparent" : theme.color.black)};
  border-radius: 10px;
  box-shadow: 0 0.4rem 0.4rem rgb(0, 0, 0, 0.5);
  align-self: start;
  justify-self: center;
  padding: 2rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-bottom: 1rem;
`;

const StyledImage = styled.div`
  width: 25rem;
  height: 15rem;
  background: hotpink;
  border: 2px solid
    ${({ active, theme }) => (active ? theme.color.white : theme.color.black)};
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const StyledPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.greyDark};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color.white};
`;
//PropTypes
Option.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};
