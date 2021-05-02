import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useState, useEffect } from "react";
import { device } from "../../styles/devices";
import { Link } from "react-router-dom";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [showEmailLabel, setShowEmailLabel] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordLabel, setShowPasswordLabel] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPasswordLabel, setShowConfirmPasswordLabel] = useState(
    false
  );
  useEffect(() => {
    email.length > 0 ? setShowEmailLabel(true) : setShowEmailLabel(false);
    password.length > 0
      ? setShowPasswordLabel(true)
      : setShowPasswordLabel(false);
    confirmPassword.length > 0
      ? setShowConfirmPasswordLabel(true)
      : setShowConfirmPasswordLabel(false);
  }, [email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submited");
  };
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>Sign up</Header>
        <Input
          // type="email"
          label="email"
          name="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          shown={showEmailLabel}
        />
        <Input
          type="password"
          label="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          shown={showPasswordLabel}
        />
        <Input
          type="password"
          label="confirm password"
          name="confirmPassword"
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          shown={showConfirmPasswordLabel}
        />
        <SubmitButton inverted type="submit">
          Sign up
        </SubmitButton>
        <StyledSwitchContainer>
          <Header>have an account?</Header>
          <Button type="button">
            <Link to="/sign-in">sign in</Link>
          </Button>
        </StyledSwitchContainer>
      </StyledForm>
    </Container>
  );
}

//Styles
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledSwitchContainer = styled.div``;

const StyledForm = styled.form`
  padding: 8rem;
`;

const Header = styled.h1``;

const SubmitButton = styled(Button)``;
