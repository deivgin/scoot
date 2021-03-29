import styled from "styled-components";

export default function Hamburg() {
  return (
    <StyledHamburg>
      <Line></Line>
      <Line></Line>
    </StyledHamburg>
  );
}

//Styles
const StyledHamburg = styled.button`
  background: transparent;
  border: none;
  margin-left: ${({ theme }) => theme.margin.header};
`;

const Line = styled.div`
  width: 2rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  margin: 0.6rem 0;
`;
