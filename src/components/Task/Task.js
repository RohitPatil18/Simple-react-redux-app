import React, { Component } from "react";
import Modal from "react-modal";
import Comment from "./Comment.js";
import { connect } from "react-redux";
import { addComment } from "../../redux/comments/commentsActions";
import { selectComments } from "../../redux/selectors";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskModal: props.showTaskModal,
      task: props.task,
      inputComment: ""
      //   comments: props.task.comments
    };
    this.saveComment = this.saveComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  saveComment = () => {
    let newComment = {
      id: Math.round(Math.random() * 1000),
      task_id: this.state.task.id,
      text: this.state.inputComment,
      user: "Rohit"
    };
    this.props.addComment(newComment);
    this.setState({
      inputComment: ""
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.state.showTaskModal}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.4)" } }}
      >
        <div style={{ display: "flex" }}>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.props.toggleTaskModal}
            style={{ position: "absolute", right: "20px" }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{this.state.task.name}</strong>
        </div>
        <hr />
        <div className="form-group" style={{ marginBottom: "10px" }}>
          <div>
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              placeholder="start writing comment here..."
              name="inputComment"
              onChange={this.handleInput}
              value={this.state.inputComment}
            ></textarea>
          </div>
          <div style={{ width: "100%", height: "40px" }}>
            <button
              type="submit"
              className="btn btn-secondary"
              style={{
                margin: "5px",
                position: "absolute",
                right: "20px",
                width: "100px"
              }}
              onClick={this.saveComment}
            >
              Save
            </button>
          </div>
        </div>
        <div style={{ display: "block" }}>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: selectComments(state, props)
  };
};

const mapDispatchToProps = {
  addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
