import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../elements/Button";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Link, Redirect } from "react-router-dom";
import FormStyles from "../../styles/FormStyles";

export default function Profile({ user }) {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: user.user,
  });

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    axios
      .put(`http://localhost:1337/users/${user.user.id}`, data, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        // Handle success.
        setLoading(false);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        setLoading(false);
        console.log("An error occurred:", error.response);
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  } else
    return (
      <FormStyles>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
              "Save"
            )}
          </Button>
        </form>
      </FormStyles>
    );
}
