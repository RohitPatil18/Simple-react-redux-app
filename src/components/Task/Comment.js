import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          border: "1px solid #e7e7e7",
          padding: "10px",
          marginBottom: "7px",
          borderRadius: "4px"
        }}
      >
        <div>
          <b>{this.props.comment.user}</b>
        </div>
        <div>
          <div>{this.props.comment.text}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
