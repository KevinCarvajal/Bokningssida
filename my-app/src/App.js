import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//views
import StartPage from "./views/StartPage";
import LoginPage from "./views/LoginPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
