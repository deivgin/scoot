import styled from "styled-components";
import PropTypes from "prop-types";

export default function Input({ label, name, shown, ...props }) {
  return (
    <Container>
      <StyledInput {...props} />
      {label && (
        <StyledLabel shown={shown} htmlFor={name}>
          {label}
        </StyledLabel>
      )}
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  transition: ease-in-out 0.2s;
  transform: ${({ shown }) => (!shown ? "translateY(2rem)" : null)};
  z-index: -1;
`;

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 3px solid ${({ theme }) => theme.color.black};
  border-radius: 10px;
  padding: 0.5rem;
  padding-left: 1rem;

  :focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.color.grey};
  }
`;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shown: PropTypes.bool.isRequired,
};
