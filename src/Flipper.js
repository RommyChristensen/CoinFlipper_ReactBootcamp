import React, { Component } from "react";
import ReactDOM from "react-dom";
import Face from "./Face";

class Flipper extends Component {
  static defaultProps = {
    faces: [
      { side: "heads", url: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", url: "https://tinyurl.com/react-coin-tails-jpg" },
      { side: null, url: null }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      ctrTail: 0,
      ctrHead: 0,
      idxFace: 2
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let randFace = Math.floor(Math.random() * 2);
    let newTail = 0,
      newHead = 0;
    randFace === 0 ? newHead++ : newTail++;

    this.setState(st => ({
      ctrTail: st.ctrTail + newTail,
      ctrHead: st.ctrHead + newHead,
      idxFace: randFace
    }));
  }

  render() {
    return (
      <div className="Flipper">
        <h1>Flipper coin</h1>
        <Face
          imgSrc={this.props.faces[this.state.idxFace].url}
          altImage={this.props.faces[this.state.idxFace].side}
        />
        <br />
        <button onClick={this.flipCoin}>Flip</button>
        <p>
          Out of {this.state.ctrTail + this.state.ctrHead}, You got{" "}
          {this.state.ctrTail} number of tails and {this.state.ctrHead} number
          of heads
        </p>
      </div>
    );
  }
}

export default Flipper;
