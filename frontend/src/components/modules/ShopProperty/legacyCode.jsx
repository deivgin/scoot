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

// const [wheels, setWheels] = useState([]);
//   const [controls, setControls] = useState([]);
//   const [materials, setMaterials] = useState([]);
//   const [speed, setSpeed] = useState([]);
//   const [currTab, setCurrTab] = useState([]);

//   useEffect(() => {
//     let isCanceled = false;
//     const getWheels = async () => {
//       const response = await fetch("http://localhost:1337/wheels");
//       const data = await response.json();
//       setWheels(data);
//     };
//     const getControls = async () => {
//       const response = await fetch("http://localhost:1337/controls");
//       const data = await response.json();
//       setControls(data);
//     };
//     const getMaterials = async () => {
//       const response = await fetch("http://localhost:1337/materials");
//       const data = await response.json();
//       setMaterials(data);
//     };
//     const getSpeed = async () => {
//       const response = await fetch("http://localhost:1337/speeds");
//       const data = await response.json();
//       setSpeed(data);
//     };
//     getWheels();
//     getControls();
//     getMaterials();
//     getSpeed();
//     return () => (isCanceled = true);
//   }, []);

//code 2.0
