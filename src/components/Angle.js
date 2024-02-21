import React, { Component } from "react";
import "../styles/header.css";

class Angle extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  change = () => {
    this.setState({ flag: !this.state.flag });

    document.querySelector(".tabContent").style.display = this.state.flag
      ? "none"
      : "flex";
  };
  render() {
    return (
      <>
        {this.state.flag ? (
          <div className="angleUp">
            <h2>Digital products</h2>
            <span className="tabOn" onClick={this.change}>
              <i class="fa fa-angle-up" aria-hidden="true"></i>
            </span>
          </div>
        ) : (
          <div className="angleDown">
            <h2>Digital products</h2>

            <span className="tabOff" onClick={this.change}>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
        )}
      </>
    );
  }
}

export default Angle;
