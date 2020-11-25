import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./App.css";

//Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
//components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
