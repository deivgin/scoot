import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Header from "./modules/Header/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}
