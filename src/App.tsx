import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// main pages
import Landing from "./pages/landing";
import Mint from "./pages/mint";

// 404 page
import NotFound from "./pages/not-found";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* routes start */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/mint">
          <Mint />
        </Route>
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        {/* routes end */}

        {/* redirect to 404 */}
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
