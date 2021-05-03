import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useState, useEffect } from "react";
import { device } from "../../styles/devices";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

export default function SigninForm({ updateUser }) {
  const [email, setEmail] = useState("");
  const [showEmailLabel, setShowEmailLabel] = useState(false);
  const [password, setPassword] = useState("");
  const [showPasswordLabel, setShowPasswordLabel] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    email.length > 0 ? setShowEmailLabel(true) : setShowEmailLabel(false);
    password.length > 0
      ? setShowPasswordLabel(true)
      : setShowPasswordLabel(false);
  }, [email, password]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
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
          <StyledButton type="submit" disabled={loading}>
            {loading ? (
              <Loader type="ThreeDots" color="#414141" height={20} width={20} />
            ) : (
              "Sign in"
            )}
          </StyledButton>
        </StyledForm>
        <StyledSwitchContainer>
          <Header inverted>New to Scoot?</Header>
          <StyledButton inverted type="button">
            <Link to="/sign-up">sign up</Link>
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
  margin: 0 3rem;
  margin-top: 3rem;
`;

//PropTypes
SigninForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
};
