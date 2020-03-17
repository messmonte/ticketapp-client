import React from "react";
import { Route } from "react-router-dom";

import AuthPage from "./components/AuthPage"
import SignupFormContainer from "./components/SignupFormContainer"
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/profile" component={ProfilePage}/>
    </div>
  );
}

export default App;
