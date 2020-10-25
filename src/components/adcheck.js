import React, { Component } from "react";

export default class Adcheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adch: "",
    };
  }
  componentWillMount() {
    if (document.getElementById("ECKckuBYwZaP")) {
      this.state.adch = "Not Blocking";
    } else {
      this.state.adch = " Blocking";
    }
  }

  render() {
    return (
      <>
        <h6>{this.state.adch}</h6>
      </>
    );
  }
}
