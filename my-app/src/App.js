import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./views/StartPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
