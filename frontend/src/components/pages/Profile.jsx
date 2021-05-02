import { useEffect, useState } from "react";
import Input from "../elements/Input";
import Loader from "react-loader-spinner";
import Button from "../elements/Button";
import axios from "axios";

export default function Profile({ user }) {
  const [loading, setLoading] = useState();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (user) {
      setLoading(true);
      setFirstName(user.user.name);
      setLoading(false);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: firstName,
    };
    const userId = user.user.id;
    const jwtToken = user.jwt;

    axios
      .put(`http://localhost:1337/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        // Handle success.
        setLoading(false);
        setFirstName(firstName);
        console.log(firstName);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        setLoading(false);
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
      {loading ? (
        <Loader type="ThreeDots" color="#414141" height={80} width={80} />
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            label="first name"
            shown={true}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Button type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#414141" height={20} width={20} />
            ) : (
              "save"
            )}
          </Button>
        </form>
      )}
    </>
  );
}
