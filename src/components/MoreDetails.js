import React, { useState } from "react";
import { Table, Tooltip } from "reactstrap";
import Adcheck from "./adcheck";
import Tmz from "./tmz";
export default function Moredetails(props) {
  console.log(navigator.platform);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <Table responsive>
        <thead>
          <th style={{ backgroundColor: "#FFC107", color: "#FFFFFF" }}>#</th>
          <th style={{ backgroundColor: "#757575", color: "#FFFFFF" }}>
            Operating System
          </th>
          <th style={{ backgroundColor: "#FFC107", color: "#FFFFFF" }}>
            JavaScript Engine
          </th>
          <th style={{ backgroundColor: "#757575", color: "#FFFFFF" }}>
            Time Zone
          </th>
          <th style={{ backgroundColor: "#FFC107", color: "#FFFFFF" }}>
            Browser Engine
          </th>
          <th style={{ backgroundColor: "#757575", color: "#FFFFFF" }}>
            Ad Blocker{" "}
          </th>
        </thead>
        <tbody>
          <th
            style={{ backgroundColor: "#FFECB3", color: "#FF5722" }}
            scope="row"
          >
            1
          </th>
          <td style={{ backgroundColor: "#CFD8DC", color: "#FF5722" }}>
            {navigator.platform}
          </td>
          <td id="TooltipExample" style={{ backgroundColor: "skyblue" }}>
            {navigator.appCodeName} (hover here)
            <Tooltip
              placement="float"
              isOpen={tooltipOpen}
              target="TooltipExample"
              toggle={toggle}
            >
              "Mozilla" is the application code name for Chrome, Firefox, IE,
              Safari, and Opera.
            </Tooltip>
          </td>
          <td style={{ backgroundColor: "#CFD8DC", color: "#FF5722" }}>
            <Tmz />
          </td>
          <td style={{ backgroundColor: "#FFECB3", color: "#FF5722" }}>
            {navigator.product}{" "}
          </td>

          <td style={{ backgroundColor: "#CFD8DC", color: "#FF5722" }}>
            <Adcheck />
          </td>
        </tbody>
      </Table>
    </>
  );
}
