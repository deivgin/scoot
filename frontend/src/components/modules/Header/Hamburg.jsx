import styled from "styled-components";

export default function Hamburg({ open, setOpen, location }) {
  return (
    <StyledHamburg onClick={() => setOpen(!open)}>
      <Line open={open} location={location}></Line>
      <Line open={open} location={location}></Line>
    </StyledHamburg>
  );
}

//Styles
const StyledHamburg = styled.button`
  background: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
  z-index: 999;
`;

const Line = styled.div`
  width: 2rem;
  height: 0.1rem;
  margin: 0.6rem 0;
  transition: all 0.1s linear;
  position: relative;
  transform-origin: 0.5rem;
  background-color: ${({ location, theme }) =>
    location === "/" ? theme.color.black : theme.color.white};
  background-color: ${({ open, theme }) => open && theme.color.white};
  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  :last-child {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
