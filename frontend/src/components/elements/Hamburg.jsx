import styled from "styled-components";

export default function Hamburg({ open, setOpen }) {
  return (
    <StyledHamburg onClick={() => setOpen(!open)}>
      <Line open={open}></Line>
      <Line open={open}></Line>
    </StyledHamburg>
  );
}

//Styles
const StyledHamburg = styled.button`
  background: transparent;
  border: none;
  margin-left: ${({ theme }) => theme.margin.header};
  :hover {
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 2rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.color.primaryLight};
  margin: 0.6rem 0;
  transition: all 0.1s linear;
  position: relative;
  transform-origin: 0.5rem;

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  :last-child {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
