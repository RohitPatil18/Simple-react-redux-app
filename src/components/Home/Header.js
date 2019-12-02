import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "../../redux/boards/boardsActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newBoard = {
      id: Math.round(Math.random() * 10000),
      name: this.state.inputValue
    };
    this.props.addBoard(newBoard);
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginTop: "10px" }}
      >
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ padding: "20px" }}
        >
          <form className="form-inline">
            <input
              className="form-control "
              type="text"
              value={this.state.inputValue}
              name="inputValue"
              placeholder="Enter new board name"
              style={{ marginRight: "10px" }}
              onChange={this.handleInput}
            />
            <button
              className="btn btn-primary my-2 my-sm-0"
              onClick={this.handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = {
  addBoard
};

export default connect(null, mapDispatchToProps)(Header);
