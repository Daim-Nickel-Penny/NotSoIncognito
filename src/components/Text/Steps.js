import React from "react";
const Steps = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-5 d-none d-lg-block">
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/2778/2778029.svg"
            width="220px"
            height="220px"
            style={{ marginLeft: "110px", marginTop: "25px" }}
          ></img>
        </div>

        <div className="col-xs-6 col-sm-7 ">
          <p style={{ backgroundColor: "rgb(207, 216, 220)", color: "black" }}>
            <h2>How to Generate Unique Password?</h2>
            <ul>
              <li>Scroll Down to the Password Generator.</li>
              <li>Using the slider make it at least 8 characters long.</li>
              <li>
                Use a combination of lowercase and uppercase letters, numbers,
                and special characters (such as: ?,*! @ ). Just tick the
                combination you want to keep
              </li>
              <li>
                The password uses a unique algorithm making new and extremely
                secured password on every click.
              </li>
              <li>One easy click copy of your unqiue password </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
