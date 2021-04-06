import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";

export default function SignUp() {
  return (
    <StyledForm>
      <h2>Sign Up</h2>
      <Input
        name="email"
        type="email"
        label="email"
        placeholder="email"
        autoComplete="off"
      />
      <Input
        name="password"
        type="password"
        label="password"
        placeholder="password"
      />
      <Button type="submit">sign up</Button>
    </StyledForm>
  );
}

//Styles

const StyledForm = styled.form`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 6rem;
  margin-top: 3rem;
`;
