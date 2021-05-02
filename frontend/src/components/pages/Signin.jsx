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
  useEffect(() => {
    email.length > 0 ? setShowEmailLabel(true) : setShowEmailLabel(false);
    password.length > 0
      ? setShowPasswordLabel(true)
      : setShowPasswordLabel(false);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email, showPasswordLabel);
  };
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>Sign in</Header>
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
        <StyledButton type="submit">Sign in</StyledButton>
        <StyledSwitchContainer>
          <Header>New to Scoot?</Header>
          <StyledButton inverted type="button">
            <Link to="/sign-up">sign up</Link>
          </StyledButton>
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

const StyledButton = styled(Button)``;
