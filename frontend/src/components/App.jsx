import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
