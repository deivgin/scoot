import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useState, useEffect } from "react";
import { device } from "../../styles/devices";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

export default function SigninForm({ updateUser }) {
  const [email, setEmail] = useState("");
  const [showEmailLabel, setShowEmailLabel] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordLabel, setShowPasswordLabel] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPasswordLabel, setShowConfirmPasswordLabel] = useState(
    false
  );
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState();
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
    setLoading(true);
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: email,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        updateUser(response.data);
        setLoading(false);
        setRedirect(true);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        setLoading(false);
      });
  };
  if (redirect) {
    return <Redirect to="/" />;
  } else
    return (
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <Header>Sign up</Header>
          <Input
            type="email"
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
          <StyledButton type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#414141" height={20} width={20} />
            ) : (
              "Sign up"
            )}
          </StyledButton>
        </StyledForm>
        <StyledSwitchContainer>
          <Header inverted>have an account?</Header>
          <StyledButton inverted type="button">
            <Link to="/sign-in">sign in</Link>
          </StyledButton>
        </StyledSwitchContainer>
      </Container>
    );
}

//Styles
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-self: center;
  align-self: center;
  margin-top: 3rem;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledSwitchContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
  border-radius: 0 10px 10px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-right: 2rem;
`;

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.exLarge};
  color: ${({ theme, inverted }) =>
    inverted ? theme.color.white : theme.color.black};
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  margin: 3rem;
`;

//PropTypes
SigninForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
};
