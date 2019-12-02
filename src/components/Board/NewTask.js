import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addTask } from "../../redux/tasks/tasksActions";

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "-webkit-transform 0.3s ease-out",
    transition: "transform 0.3s ease-out",
    width: "50%"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
};

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    let newTask = {
      id: Math.round(Math.random()),
      board_id: this.props.board_id,
      name: this.state.inputValue
    };
    this.props.addTask(newTask);
    this.props.toggleNewTask();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.showNewTask}
        style={customStyles}
        ariaHideApp={false}
      >
        <div style={{ marginBottom: "20px" }}>
          <button
            type="button"
            className="close"
            onClick={this.props.toggleNewTask}
          >
            &times;
          </button>
          <h4 className="modal-title">Add New Task</h4>
        </div>
        <div>
          <input
            className="form-control "
            type="text"
            value={this.state.inputValue}
            name="inputValue"
            placeholder="Create new task here.."
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            onChange={this.handleInput}
          />
          <button
            className="btn btn-primary my-2 my-sm-0"
            onClick={this.handleSubmit}
            style={{ marginLeft: "20px" }}
          >
            Submit
          </button>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(NewTask);
