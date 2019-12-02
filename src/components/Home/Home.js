import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";

// var boards = JSON.parse(localStorage.getItem("data"));

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   boardsData: boards
    // };
    // this.nextID = boards.length + 1;
    // this.createNewBoard = this.createNewBoard.bind(this);
  }

  //   createNewBoard = newBoardName => {
  //     let boardsData = this.state.boardsData;
  //     let newBoard = {
  //       id: this.nextID,
  //       name: newBoardName
  //     };
  //     boardsData.push(newBoard);
  //     this.setState({
  //       boardsData
  //     });
  //   };

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default Home;
