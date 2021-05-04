import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";

export default function CartTotal({ total, length }) {
  return (
    <Container>
      {length === 0 ? (
        <>
          <h1>Cart empty</h1>
          <StyledButton inverted>
            <Link to="shop">Buy a scooter</Link>
          </StyledButton>
        </>
      ) : (
        <>
          <h1>total {total}€</h1>
          <StyledButton inverted>proceed to checkout</StyledButton>
        </>
      )}
    </Container>
  );
}

//Styles
const Container = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 2rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: medium;
  padding: 1rem 2rem;
`;
//PropTypes
CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
};
