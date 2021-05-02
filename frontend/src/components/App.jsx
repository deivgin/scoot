import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Shop, Signin, Signup } from "./pages";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/sign-in">
            <Signin />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

const Main = styled.main`
  height: 100%;
`;
