import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Header from "./components/Header";

//views
import StartPage from "./views/StartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ContactPage from "./views/ContactPage";
import EventPage from "./views/EventPage";
import BookPage from "./views/BookPage";

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <Router>
<div className={darkmode ? 'App dark-mode' : 'App'}>
        <Header/>
        <button onClick={()=>setDarkmode(!darkmode)}>TOGGLE MODE</button>
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/RegisterPage" component={RegisterPage} />
            <Route exact path="/ContactPage" component={ContactPage}/>
            <Route exact path="/EventPage" component={EventPage}/>
            <Route exact path="/BookPage" component={BookPage}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
