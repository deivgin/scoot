import styled from "styled-components";

export default function Button({ inverted, children, className, ...props }) {
  return (
    <StyledButton inverted={inverted} {...props} className={className}>
      {children}
    </StyledButton>
  );
}

//Styles
const StyledButton = styled.button`
  background-color: ${({ inverted }) =>
    inverted
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0.5rem 2rem;
  border: 3px solid
    ${({ inverted }) =>
      inverted
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.black};
  border-radius: 10px;
  transition: 0.2s;
  transform: translateY(0);

  :hover {
    cursor: pointer;
    color: ${({ inverted }) =>
      inverted
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.black};
    background-color: ${({ inverted }) =>
      inverted
        ? ({ theme }) => theme.color.black
        : ({ theme }) => theme.color.white};
    transform: translateY(-0.1rem);
  }

  :active {
    transform: translateY(0.1rem);
  }
`;
