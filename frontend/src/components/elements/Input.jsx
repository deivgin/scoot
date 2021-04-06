import styled from "styled-components";

export default function Input({ label, name, value, ...props }) {
  return (
    <Container>
      <StyledInput {...props} />
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
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
`;

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  padding: 0.5rem;
  margin-bottom: 1.5rem;

  :focus {
    outline: none;
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
  }
`;
