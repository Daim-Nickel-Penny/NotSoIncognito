import React, { Component } from "react";

export default class Tmz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zone: "",
    };
  }

  componentWillMount() {
    let offset = new Date().getTimezoneOffset();
    let formatted = -(offset / 60);
    this.state.zone = formatted;
    console.log(this.state.zone);

    //ip
  }

  render() {
    return (
      <>
        <h6> {this.state.zone}</h6>
      </>
    );
  }
}
