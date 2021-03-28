//THIS IS A TEST COMPONENT
import styled from "styled-components";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../../redux/Counter/counter.actions";

function Counter(props) {
  return (
    <Wrapper>
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>+</button>
      <button onClick={() => props.decreaseCounter()}>-</button>
    </Wrapper>
  );
}

//styled
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.powderWhite};
`;

//redux
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
