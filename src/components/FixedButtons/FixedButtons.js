import React, { useRef } from "react";
import "./FixedButtons.css";
import Chevron from "../../media/chevron.svg";
// import UpChevronBg from "../../media/up-chevron-bg.svg";
// import UpChevronBg from "../../media/chevron-top.svg";

function FixedButtons(props) {
  const chevron = useRef();
  const GotToTheTopButton = useRef();
  const [showGoToTop, setShowGoToTop] = React.useState(window.scrollY > 100);

  function ToTheTop() {
    window.scrollTo(0, 0);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) setShowGoToTop(false);
    else setShowGoToTop(true);
  });

  return (
    <div className="FixedButtons">
      {showGoToTop && (
        <div
          className="GoToTheTopButton"
          ref={GotToTheTopButton}
          onClick={() => ToTheTop()}
        >
          <img src={Chevron} ref={chevron} alt="" />
        </div>
      )}
    </div>
  );
}

export default FixedButtons;
