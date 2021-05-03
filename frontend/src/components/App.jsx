import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Shop, Signin, SignUp, Profile } from "./pages";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer";
import { useState } from "react";
import ProtectedRoute from "./elements/ProtectedRoute";

export default function App() {
  const [user, setUser] = useState(null);
  console.log("user", user);
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
            <Signin updateUser={(user) => setUser(user)} />
          </Route>
          <Route path="/sign-up">
            <SignUp updateUser={(user) => setUser(user)} />
          </Route>
          <ProtectedRoute
            path="/profile"
            user={user}
            redirectRoute={"/sign-in"}
          >
            <Profile user={user} />
          </ProtectedRoute>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

const Main = styled.main`
  display: grid;
  padding-bottom: 2.5rem;
  min-height: 80vh;
`;
