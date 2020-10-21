import React, { useState, useRef } from "react";

import "./Display.css";
import { Container } from "../container/Container";
import { Button } from "reactstrap";
import Tooltip from "../container/tooltip/Tooltip";
import { generatePassword, copyToClipBoard } from "../../utils/Helper";

const Display = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();
  const [tooltip, setTooltip] = useState(false);
  const [type, setType] = useState("password");
  const passwordRef = useRef(null);
  let pwdDescription = "";

  const generateNewPassword = () => {
    const pwd =
      rangeValue > 3
        ? generatePassword(passwordProps, rangeValue)
        : generatePassword(passwordProps, 3);
    setPassword(pwd);
  };

  const copyClipBoard = (e) => {
    e.preventDefault();
    copyToClipBoard(passwordRef.current);
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 2000);
  };

  const onSelectTag = (e) => {
    setType(e.target.value);
  };

  const setBackgroundColor = (password) => {
    if (password && password.length === 1 && password.length <= 5) {
      pwdDescription = "Bad password";
      return "#cb473e";
    } else if (password && password.length >= 6 && password.length <= 10) {
      pwdDescription = "Weak password";
      return "#f07d58";
    } else if (password && password.length > 10) {
      pwdDescription = "Strong password";
      return "#55a95d";
    } else {
      pwdDescription = "Bad password";
      return "#cb473e";
    }
  };

  return (
    <>
      <div className="offset-2">
        <select
          name="type"
          value={type}
          onChange={onSelectTag}
          className="form-control form-control-sm"
          style={selectTagStyle}
        >
          <option value="password">Random Password</option>
          <option value="pin">PIN</option>
        </select>
      </div>
      <div className="row">
        <div
          className="col-9 password-display-container"
          style={{ backgroundColor: setBackgroundColor(password) }}
        >
          <div style={{ width: "100%" }}>
            <div className="password-display">
              <input
                ref={passwordRef}
                type="text"
                value={password}
                className="password-display-input"
                readOnly
              />
            </div>

            <div className="password-description">
              {password && password.length > 10 ? (
                <>
                  <i className="fas fa-check-circle"></i> {pwdDescription}
                </>
              ) : (
                <>
                  <i className="fas fa-exclamation-circle"></i> {pwdDescription}
                </>
              )}
            </div>
          </div>

          <div className="password-display-icons">
            {/* <Button
              className="copy-btn"
              iconClass="far fa-copy"
              handleClick={copyClipBoard}
            >
              Copy
            </Button> */}
            {/* <Button
              className="generate-btn"
              iconClass="fas fa-sync-alt"
              handleClick={() => generateNewPassword()}
            /> */}

            <Button color="primary" onClick={copyClipBoard}>
              copy
            </Button>
            <Button color="warning" onClick={generateNewPassword}>
              new
            </Button>

            <Tooltip
              message="Copied"
              position="left"
              displayTooltip={tooltip}
            />
          </div>
        </div>
      </div>

      <Container
        type={type}
        setPassword={setPassword}
        setRange={setRange}
        setPasswordProps={setPasswordProps}
        passwordRef={passwordRef}
      />
    </>
  );
};

const selectTagStyle = {
  backgroundColor: "inherit",
  color: "#506175",
  width: "20%",
  height: "auto",
  marginLeft: "-4px",
};

export default Display;
