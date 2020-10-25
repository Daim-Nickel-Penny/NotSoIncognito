import React from "react";
const Info = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-7 ">
          <p style={{ backgroundColor: "#3F4868", color: "white" }}>
            <h2>Whats this data about?</h2>
            The data below is showing what normal websites can acess from your
            browser. Its highly recommended to use a good VPN. You might be
            worried on seeing this data. We assure you that your data is never
            exchanged or shared with anyone. The data you are seeing is only
            temporarily shown on your local machine. In no way the data is
            tranferred over anything. This is an important reminder for you to
            start using VPN and stay protected.
          </p>
        </div>
        <div className="col-5 d-none d-lg-block">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3296/3296085.svg"
            width="220px"
            height="220px"
            style={{ marginLeft: "110px", marginTop: "20px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Info;
