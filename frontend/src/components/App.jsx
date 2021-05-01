import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import Shop from "./pages/Shop";
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
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

const Main = styled.main`
  height: 100%;
`;
