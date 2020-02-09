import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/home/charts" />
          {/* <Route path="/"  component={Home} /> */}
          <Redirect to="not-found" />
          
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
