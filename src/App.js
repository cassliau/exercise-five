import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

//styles
import "./App.css";

//Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
//components
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise-five-35195.firebaseapp.com",
  databaseURL: "https://exercise-five-35195.firebaseio.com",
  projectId: "exercise-five-35195",
  storageBucket: "exercise-five-35195.appspot.com",
  messagingSenderId: "776757950338",
  appId: "1:776757950338:web:e3bb05af6bcf8a575f819b",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //boolean to determine if logged in
  const [loading, setLoading] = useState(true); // is page loading
  //const[userInformation, setUserInformation] = useState({});

  //ensure app is initalized when it is ready
  useEffect(() => {
    //check if firebase exists
    if (!firebase.apps.length) {
      //initialize firebase
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  //function for logging in
  function LoginFunction(e) {
    //this is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }

  // function for logging out
  function LogoutFunction() {
    //function to run when you want to log out...
  }
  //function for creating an account
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("CREATE ACCOUNT ERROR", error);
      });
  }
  console.log({ loggedIn });

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction} />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
