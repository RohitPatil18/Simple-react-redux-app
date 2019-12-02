import React, { Component } from "react";
import Task from "../Task";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      showTaskModal: false
    };
    this.toggleTaskModal = this.toggleTaskModal.bind(this);
  }

  toggleTaskModal = () => {
    this.setState({
      showTaskModal: !this.state.showTaskModal
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="card"
          onClick={this.toggleTaskModal}
          style={{
            width: "calc(100% - 30px)",
            //   height: "100px",
            //   boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            border: "1px solid #e7e7e7",
            borderRadius: "4px",
            margin: "0px 15px 10px 15px",
            padding: "10px",
            position: "relative",
            display: "flex"
          }}
        >
          <div>
            <b>{this.state.task.name}</b>
          </div>
          <div
            style={{
              position: "absolute",
              right: "0",
              marginRight: "20px"
            }}
          >
            <span>
              <i className="fas fa-comment"></i>
            </span>
            {/* {" " + this.state.task.comments.length} */}
          </div>
        </div>
        {this.state.showTaskModal && (
          <Task
            task={this.state.task}
            showTaskModal={this.state.showTaskModal}
            toggleTaskModal={this.toggleTaskModal}
          />
        )}
      </React.Fragment>
    );
  }
}

export default TaskItem;
