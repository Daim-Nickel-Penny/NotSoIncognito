import React from "react";
import Interprot from "./Interprot";
import Och from "./Och";
import Sf from "./sf";
import Tmz from "./tmz";
import Header from "./header/Header";
import Display from "./display/Display";
import SemiMain from "./Semi_Main";
import NavComp from "./NavComp";
import { Parts } from "./Parts";
import { Parts2 } from "./Parts2";

import Particles from "react-tsparticles";
import Profile from "./Profile";
import TabDetails from "./TabDetails";
import Footer from "./Footer";
import Features from "./Features";
import FeatureFour from "./Features";

export default function Maincomp() {
  return (
    <>
      {" "}
      {<Parts />}
      <NavComp />
      <div className="container mb-5"></div>
      <div className="container mb-5"></div>
      <div className="container mb-5"></div>
      <div className="container mb-5"></div>
      <Header />
      {/* <SemiMain /> */}
      <TabDetails />
      <Display />
      <Features />
      <Footer />
    </>
  );
}
