import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Events from "./Components/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/reviews" component={Reviews} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
