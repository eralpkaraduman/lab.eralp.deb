/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import BrythonPage from "./pages/brython";

const App: FunctionComponent = () => (
  <Switch>
    <Route path="/brython">
      <BrythonPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export const AppWithoutRouter = App;

export default () => (
  <Router>
    <App />
  </Router>
);
