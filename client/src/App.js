import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import India from "./components/India";
import World from "./components/World";
import Business from "./components/Business";
import Sports from "./components/Sports";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/india">
            <India />
          </Route>
          <Route path="/world">
            <World />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/createblog">
            <CreateBlog />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
