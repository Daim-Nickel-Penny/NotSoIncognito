import React from "react";
import { Jumbotron } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <Jumbotron fluid>
      <div className="row">
        <div className="col-md-12 header">
          <h1 className="h1">Secure Yourself Now</h1>
          <div className="col-md-12">
            <h4 style={{ color: "black" }}>
              Create strong passwords with Password Generator
            </h4>
          </div>
          <div style={{ marginTop: "27px" }}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3039/3039418.svg "
              width="52px"
              height="52px"
            ></img>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/890/890163.svg "
              width="52px"
              height="52px"
              style={{ marginLeft: "7px" }}
            ></img>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/890/890177.svg"
              width="52px"
              height="52px"
              style={{ marginLeft: "7px" }}
            ></img>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/908/908232.svg"
              width="52px"
              height="52px"
              style={{ marginLeft: "7px" }}
            ></img>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1349/1349741.svg"
              width="52px"
              height="52px"
              style={{ marginLeft: "7px" }}
            ></img>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2164/2164857.svg"
              width="52px"
              height="52px"
              style={{ marginLeft: "7px" }}
            ></img>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Header;
