import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../elements/Button";
import axios from "axios";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import FormStyles from "../../styles/FormStyles";

export default function SignUp({ updateUser }) {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setLoading(true);
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: data.email,
        password: data.password,
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
      <FormStyles>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <h1>Sign In</h1>

          <div>
            <input {...register("email", { required: true })} />
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            <label htmlFor="password">Password</label>
          </div>

          <Button type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#414141" height={20} width={20} />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </FormStyles>
    );
}
//PropTypes
SignUp.propTypes = {
  updateUser: PropTypes.func.isRequired,
};
