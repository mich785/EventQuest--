import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Events from "./Components/Events";
import "./App.css"
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="AppContent">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/reviews" component={Reviews} />
          <Route path="loginpage" component={LoginPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
