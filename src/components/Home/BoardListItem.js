import React, { Component } from "react";
import { Link } from "react-router-dom";

class BoardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.board.id,
      name: this.props.board.name
    };
    // this.openBoard = this.openBoard.bind(this);
  }
  //   openBoard = () => {
  //     // console.log(this.props.board);
  //     // let history =
  //     window.location.replace("/" + this.props.board.id);
  //     window.history.pushState({}, "Board", "/" + this.props.board.id);
  //   };

  render() {
    return (
      <Link to={"/" + this.props.board.id}>
        <div
          className="card col-lg-2 col-md-2"
          style={{
            margin: "5px",
            borderRadius: "4px",
            padding: "10px",
            minWidth: "250px",
            height: "150px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
          }}
          //   onClick={this.openBoard}
        >
          <div className="card-body" style={{ textAlign: "left" }}>
            <h4>{this.props.board.name}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default BoardListItem;
