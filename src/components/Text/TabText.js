import React from "react";
const TabText = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-7 ">
          <p style={{ backgroundColor: "#3F4868", color: "white" }}>
            <h2>Why Password Generator?</h2>
            What's upsetting, is that a great many people's passwords are
            straightforward and this leaves them powerless against having their
            different records hacked. The normal individual has 25-30 online
            profiles or records, however, to make it simpler to recollect that,
            they utilize just 5 passwords for every one of them. But if the
            password is generated from our generator it is definately more
            secure and extremely complex to crack through. Remeber to follow the
            steps below
          </p>
        </div>
        <div className="col-5 d-none d-lg-block">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3039/3039427.svg"
            width="220px"
            height="220px"
            style={{ marginLeft: "110px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TabText;
