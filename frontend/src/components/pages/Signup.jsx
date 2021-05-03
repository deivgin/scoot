import { useForm } from "react-hook-form";
import styled from "styled-components";
import { device } from "../../styles/devices";
import Button from "../elements/Button";

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Styles>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <h1>Sign Up</h1>
        <div>
          <input name="firstName" type="text" />
          <label htmlFor="firstName">First Name</label>
        </div>

        <div>
          <input name="lastName" type="text" />
          <label htmlFor="lastName">Last Name</label>
        </div>

        <div>
          <input name="country" />
          <label htmlFor="country">Country</label>
        </div>

        <div>
          <input name="address" type="text" />
          <label htmlFor="address">Address</label>
        </div>

        <div>
          <input name="city" type="text" />
          <label htmlFor="city">City</label>
        </div>

        <div>
          <input name="region" type="text" />
          <label htmlFor="region">State/Province/Region</label>
        </div>

        <div>
          <input name="phoneNumber" type="number" />
          <label htmlFor="phoneNumber">Phone number</label>
        </div>

        <div>
          <input name="zipCode" type="number" />
          <label htmlFor="zipCode">Zip Code</label>
        </div>

        <Button type="submit">Sign Up</Button>
      </form>
    </Styles>
  );
}

//Styles
const Styles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-self: center;
  align-self: center;
  margin-top: 3rem;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.exLarge};
    color: ${({ theme, inverted }) =>
      inverted ? theme.color.white : theme.color.black};
    padding: 2rem;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    transition: ease-in-out 0.2s;
    //transform: ${({ shown }) => (!shown ? "translateY(2rem)" : null)};
    z-index: -1;
  }

  input {
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    padding: 0.5rem;
    padding-left: 1rem;

    :focus {
      outline: none;
      border: 3px solid ${({ theme }) => theme.color.grey};
    }
  }
`;
