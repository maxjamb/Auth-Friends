import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <PrivateRoute path="/friends/:id" component={Friend} />
    </div>
  );
}

export default App;
