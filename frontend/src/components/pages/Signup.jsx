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
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        country: data.country,
        address: data.address,
        city: data.city,
        region: data.region,
        phoneNumber: data.phoneNumber,
        zipCode: data.zipCode,
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
          <h2>
            Already a member? <Link to="/sign-in">Sign In</Link>
          </h2>
          <h1>Sign Up</h1>
          <div>
            <input {...register("firstName", { required: true })} />
            <label htmlFor="firstName">First Name</label>
            {errors.firstName && <p>required</p>}
          </div>

          <div>
            <input {...register("lastName", { required: true })} />
            <label htmlFor="lastName">Last Name</label>
          </div>

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

          {/* <div>
            <input {...register("confirmPassword", { required: true })} />
            <label htmlFor="confirmPassword">Confirm password</label>
          </div> */}

          <div>
            <input {...register("country", { required: true })} />
            <label htmlFor="country">Country</label>
          </div>

          <div>
            <input {...register("address", { required: true })} />
            <label htmlFor="address">Address</label>
          </div>

          <div>
            <input {...register("city", { required: true })} />
            <label htmlFor="city">City</label>
          </div>

          <div>
            <input {...register("region", { required: true })} />
            <label htmlFor="region">State/Province/Region</label>
          </div>

          <div>
            <input {...register("phoneNumber", { required: true })} />
            <label htmlFor="phoneNumber">Phone number</label>
          </div>

          <div>
            <input {...register("zipCode", { required: true })} />
            <label htmlFor="zipCode">Zip Code</label>
          </div>

          <Button disabled={loading} type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#414141" height={20} width={60} />
            ) : (
              "Sign up"
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
