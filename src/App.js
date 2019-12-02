import React from "react";
import "./App.css";
import Task from "./components/Task";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./components/Board";

var boards = [
  {
    id: 1,
    name: "Board 1",
    tasks: [
      {
        id: 1,
        name: "Complete frontend.",
        comments: [
          {
            id: 1,
            text: "Will be done till tomorrow evening",
            user: "Rohit"
          },
          {
            id: 2,
            text: "Part 1 Completed.",
            user: "Rohit"
          }
        ]
      },
      {
        id: 2,
        name: "Design landing page",
        comments: [
          {
            id: 1,
            text: "Will be done till today evening",
            user: "Rohit"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Board 2",
    tasks: []
  }
];

localStorage.setItem("data", JSON.stringify(boards));

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
