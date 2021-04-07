import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainLayout as Layout } from "../styles/layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Header from "./modules/Header/Header";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Footer from "./modules/Footer";

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <MainContent>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </Layout>
    </Router>
  );
}

const MainContent = styled.main`
  border: 0.1rem solid ${({ theme }) => theme.color.primaryLight};
  grid-column: content-start / content-end;
  grid-row: content-start / content-end;
`;
