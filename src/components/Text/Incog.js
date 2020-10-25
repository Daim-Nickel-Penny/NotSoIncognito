import React from "react";
const Incog = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-5 d-none d-lg-block">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1488/1488096.svg"
            width="220px"
            height="220px"
            style={{ marginLeft: "110px", marginTop: "25px" }}
          ></img>
        </div>

        <div className="col-xs-6 col-sm-7 ">
          <p style={{ backgroundColor: "rgb(207, 216, 220)", color: "black" }}>
            <h2>Why NotSoIncgonito?</h2>
            The name in it self is self explanatory. The data that is shown
            below can accesed right from your local machine. You might be
            wondering of going incognito and making yourself invisble from the
            being tracked. You are most welcome to open the website in incognito
            and then you can match the data on your own and anaylyze whether you
            are actually in incognito or not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incog;
