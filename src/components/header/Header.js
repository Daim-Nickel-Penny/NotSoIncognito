import React from "react";
import { Jumbotron } from "reactstrap";
import "./Header.css";
import { Blob } from "./Blob";
const Header = () => {
  return (
    <div className="container bg-transparent" fluid>
      <div className="row">
        <h1
          className="glitch  d-none d-lg-block"
          data-text="Not So Incognito"
          style={{ marginLeft: "450px", fontSize: "2em " }}
        >
          Not So Incognito
        </h1>
        <div className="col-md-12 header">
          <h1 className="h1">Secure Yourself Now</h1>
          <div className="col-md-12">
            <h4 style={{ color: "white" }}>
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
          <div className=" d-none d-lg-block" style={{ marginTop: "15px" }}>
            <Blob />
          </div>

          <div className="row" style={{ marginTop: "47px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
