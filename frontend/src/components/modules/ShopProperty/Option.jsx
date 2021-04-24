//import PropTypes from "prop-types";
import styled from "styled-components";

export default function Option({ name, value }) {
  return (
    <StyledInput>
      <input type="radio" name="option" value={value} />
      <label htmlFor="option">{name}</label>
    </StyledInput>
  );
}

//PropTypes
// Option.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
// };

//Styles
const StyledInput = styled.div`
  grid-column: 1 / -1;
  align-self: center;
  border: 0.1rem ${(props) => (props.active ? "dashed" : "solid")}${({ theme }) => theme.color.primaryLight};
  height: 100%;

  :hover {
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }

  label {
  }
`;
//checked={value.name === name}
//
