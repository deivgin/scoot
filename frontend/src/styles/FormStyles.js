import styled from "styled-components";

const FormStyles = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 3rem 0;

  div {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.exLarge};
    color: ${({ theme, inverted }) =>
      inverted ? theme.color.white : theme.color.black};
    padding: 2rem;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.color.greyDark};
    text-decoration: underline;
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

  button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-top: 1rem;
    display: flex;
    align-content: center;
    justify-content: center;
    > * {
      margin: 0;
    }
  }
`;

export default FormStyles;
