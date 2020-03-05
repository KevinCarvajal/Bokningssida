import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Header from "./components/Header";

//views
import StartPage from "./views/StartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ContactPage from "./views/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header/>
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/RegisterPage" component={RegisterPage} />
            <Route exact path="/ContactPage" component={ContactPage}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
