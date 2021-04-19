import styled from "styled-components";

export default function Button({ children, className, ...props }) {
  return (
    <StyledButton {...props} className={className}>
      {children}
    </StyledButton>
  );
}

//Styles
const StyledButton = styled.button`
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 0.25rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.primary};

  :hover {
    border: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    color: ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }
`;
