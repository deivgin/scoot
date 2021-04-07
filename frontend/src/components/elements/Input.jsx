import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Input({ label, name, value, ...props }) {
  const [labelShown, setLabelShown] = useState(false);
  useEffect(
    () => (value.length > 0 ? setLabelShown(true) : setLabelShown(false)),
    [value]
  );
  return (
    <Container>
      <StyledInput {...props} />
      {label && (
        <StyledLabel shown={labelShown} htmlFor={name}>
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
  transform: ${(props) => (!props.shown ? "translateY(2rem)" : null)};
  z-index: -1;
`;

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  :focus {
    outline: none;
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
  }
`;
