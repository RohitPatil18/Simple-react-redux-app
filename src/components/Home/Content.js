import React, { Component } from "react";
import BoardListItem from "./BoardListItem";
import { connect } from "react-redux";

class Content extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   boards: props.boards
    // };
  }

  render() {
    return (
      <div className="container">
        {this.props.boards.map(board => (
          <BoardListItem key={board.id} board={board} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

export default connect(mapStateToProps)(Content);
