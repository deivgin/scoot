import styled from "styled-components";

export default function Option({ name, price, checked }) {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <StyledInput onClick={handleClick}>
      <input type="checkbox" name="option" value={1} />
      <label htmlFor={name}>{name}</label>
      <span>{price}</span>
    </StyledInput>
  );
}

//Styles
const StyledInput = styled.div`
  grid-column: 1 / -1;
  align-self: center;
  border-top: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  height: 100%;

  :hover {
    border-top: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    border-bottom: 0.1rem dashed ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }

  label {
  }
`;
