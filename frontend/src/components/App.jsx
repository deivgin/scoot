import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import Shop from "./pages/Shop";
import Footer from "./modules/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
