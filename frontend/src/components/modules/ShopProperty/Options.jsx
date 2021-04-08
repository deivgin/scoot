import styled from "styled-components";
import Button from "../../elements/Button";

export default function Options() {
  const clickTest = () => console.log("click");
  return (
    <>
      <h2>heading based on propery</h2>
      <hr />
      <Container>
        <Option onClick={clickTest}>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
      </Container>
    </>
  );
}

//Styles
const Container = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  display: flex;
  flex-direction: column;
`;

const Option = styled(Button)`
  margin: 0;
`;
