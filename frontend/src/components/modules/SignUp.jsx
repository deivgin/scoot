import { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";

export default function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <Input
        name="email"
        type="email"
        label="email"
        placeholder="email"
        autoComplete="off"
        value={formValues.email}
        onChange={(e) =>
          setFormValues((values) => ({ ...values, email: e.target.value }))
        }
      />
      <Input
        name="password"
        type="password"
        label="password"
        placeholder="password"
        value={formValues.password}
        onChange={(e) =>
          setFormValues((values) => ({ ...values, password: e.target.value }))
        }
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
  align-items: center;
  margin: 0 6rem;
  margin-top: 3rem;

  & + ${Button} {
    margin: 2rem;
  }
`;
