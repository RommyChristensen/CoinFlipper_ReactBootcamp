import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Face.css";

class Face extends Component {
  render() {
    return <img src={this.props.imgSrc} className="Face-img" alt={this.props.altImage} />;
  }
}

export default Face;
