import React, { Component } from "react";
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
import { connect } from "react-redux";
import { selectBoard, selectTasks } from "../../redux/selectors";

class Board extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      //   board: this.props.boards.find(board => board.id === Number(this.id)),
      //   tasks: this.props.tasks.filter(
      //     task => Number(task.board_id) === Number(this.id)
      //   ),
      showNewTask: false
    };
    this.toggleNewTask = this.toggleNewTask.bind(this);
  }

  toggleNewTask = () => {
    this.setState({
      showNewTask: !this.state.showNewTask
    });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          padding: "10px"
        }}
      >
        <div style={{ display: "flex", width: "100%", position: "relative" }}>
          <div style={{ float: "left" }}>
            <h2>{this.props.board.name}</h2>
          </div>
          <div
            style={{
              position: "absolute",
              right: "0",
              display: "table-cell",
              verticalAlign: "middle"
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{ margin: "20px" }}
              onClick={this.toggleNewTask}
            >
              New Task
            </button>
          </div>
        </div>
        <hr />
        {this.props.tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
        {this.state.showNewTask && (
          <NewTask
            showNewTask={this.state.showNewTask}
            toggleNewTask={this.toggleNewTask}
            board_id={this.props.board.id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let boardId = props.match.params.id;
  return {
    board: selectBoard(state, boardId),
    tasks: selectTasks(state, boardId)
  };
};

export default connect(mapStateToProps)(Board);
