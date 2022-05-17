import React from "react";
import FixedButtons from "../../components/FixedButtons/FixedButtons";
import "./MainPage.css";
import OurOffer from "./pageComponents/OurOffer/OurOffer";
import Partners from "./pageComponents/Partners/Partners";

function MainPage(props) {
  return (
    <div className="MainPage">
      <OurOffer />
      <Partners />
      <FixedButtons />
      <div style={{ marginBottom: "3em" }} />
    </div>
  );
}

export default MainPage;
