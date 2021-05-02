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
  text-align: center;
  background-color: ${({ inverted }) =>
    inverted
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.black};
  color: ${({ inverted }) =>
    inverted
      ? ({ theme }) => theme.color.black
      : ({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0.5rem 2rem;
  border: 3px solid ${({ theme }) => theme.color.black};
  border-radius: 10px;
  box-shadow: 0 0.4rem 0.4rem rgb(0, 0, 0, 0.5);
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

  :disabled,
  [disabled] {
    background-color: ${({ theme }) => theme.color.greyDark};
    color: ${({ theme }) => theme.color.greyLight};
    border: 3px solid ${({ theme }) => theme.color.grey};
  }
`;
