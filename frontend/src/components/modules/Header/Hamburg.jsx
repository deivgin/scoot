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
  background-color: ${({ theme }) => theme.color.white};
  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  :last-child {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
