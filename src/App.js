import React from "react";
import "./App.css";
import Task from "./components/Task";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./components/Board";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/:id/task" component={Task} />
          <Route path="/:id" component={Board} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
