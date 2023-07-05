import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
