import React, { Component } from "react";

class Och extends Component {
  constructor(props) {
    super(props);
    this.state = {
      osys: "",

      brName: "",
      fullVer: "",
      majorVer: "",
      navApp: "",
      navUser: "",
    };
  }

  componentWillMount() {
    // start
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = "" + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if (
      (nameOffset = nAgt.lastIndexOf(" ") + 1) <
      (verOffset = nAgt.lastIndexOf("/"))
    ) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt("" + fullVersion, 10);
    if (isNaN(majorVersion)) {
      fullVersion = "" + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    // console.log(
    //   "" +
    //     "Browser name  = " +
    //     browserName +
    //     "<br>" +
    //     "Full version  = " +
    //     fullVersion +
    //     "<br>" +
    //     "Major version = " +
    //     majorVersion +
    //     "<br>" +
    //     "navigator.appName = " +
    //     navigator.appName +
    //     "<br>" +
    //     "navigator.userAgent = " +
    //     navigator.userAgent +
    //     "<br>"
    // );

    let os = navigator.userAgent.slice(13).split(";");
    os = os[0];
    console.log(os);

    this.state.osys = os;
    console.log(this.state.osys);
    this.state.brName = browserName;
    this.state.fullVer = fullVersion;
    this.state.majorVer = majorVersion;
    this.state.navApp = navigator.appName;
    this.state.navUser = navigator.userAgent;

    //end

    console.log(this.state.brName + "\n" + this.state.fullVer);
  }

  render() {
    return (
      <>
        <h1>
          OS version
          <p>
            {
              (this.state.brName,
              this.state.fullVer,
              this.state.majorVer,
              this.state.navApp,
              this.state.navUser)
            }
          </p>
        </h1>
      </>
    );
  }
}

export default Och;
