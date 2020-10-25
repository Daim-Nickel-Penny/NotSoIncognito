import React, { Component } from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";
export default class Features extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="container d-none d-lg-block"
        style={{ marginLeft: "275px" }}
      >
        <h2 style={{ color: "white", marginLeft: "275px" }}>Our Features</h2>
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          data={[
            { label: "Private", value: 5 },
            { label: "Secured Password", value: 17 },
            { label: "Complete Local Machine Work", value: 25 },
            { label: "Random Data", value: 9 },
            { label: "AI", value: 3 },

            { label: "Databases", value: 22 },
          ]}
          labelFont={{
            family: "Arial",
            size: 16,
            color: "#fff",
            weight: "bold",
          }}
          legendFont={{
            family: "Arial",
            size: 12,
            color: "white",
            weight: "bold",
          }}
        />
      </div>
    );
  }
}
