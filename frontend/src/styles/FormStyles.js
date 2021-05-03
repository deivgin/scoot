import styled from "styled-components";
import { device } from "./devices";

const FormStyles = styled.div`
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

export default FormStyles;
