import React from "react";
import GetTranslation from "../../utils/GetTranslation";
import "./BottomMenu.css";
import Hold1 from "../../media/svg (6).svg";
import Hold2 from "../../media/svg (7).svg";
import Hold3 from "../../media/svg (8).svg";
import Hold4 from "../../media/svg (9).svg";
import Hold5 from "../../media/svg (10).svg";
import Hold6 from "../../media/svg (11).svg";
import Hold7 from "../../media/svg (12).svg";
import Hold8 from "../../media/svg (13).svg";
import { WindowWidthContext } from "../../App";
import FacebookLogo from "../../media/facebookLogo.svg";

function BottomMenu(props) {
  const holdIcons = [Hold1, Hold2, Hold3, Hold4, Hold5, Hold6, Hold7, Hold8];
  const windowWidth = React.useContext(WindowWidthContext);
  const columns = [...Array(Math.floor(windowWidth / 15)).keys()];
  const rows = [...Array(20).keys()];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="BottomMenuContainer">
      <div className="HoldsContainer">
        {rows.map((index) => {
          return (
            <div
              className="HoldsRow"
              style={{ transform: `translateY(${index * 100}%)` }}
              key={index}
            >
              {columns.map((index) => {
                const random = Math.floor(Math.random() * holdIcons.length);
                return <img key={index} src={holdIcons[random]} alt="" />;
              })}
            </div>
          );
        })}
      </div>
      <div className="BottomMenu">
        <div className="BottomSegment">
          <h2 className="BottomHeader">{GetTranslation("Kontakt:")}</h2>
          <h3>{GetTranslation("e-mail: info@wgore.eu")}</h3>

          <h3>{GetTranslation("telefon: +48 22 245 36 88")}</h3>
          <img
            onClick={() =>
              openInNewTab(
                "https://www.facebook.com/Arena-Wspinaczkowa-Wg%C3%B3r%C4%99-524077307676859"
              )
            }
            src={FacebookLogo}
            alt=""
          />
        </div>
        <div className="BottomSegment">
          <h2 className="BottomHeader">{GetTranslation("Adres:")}</h2>
          <h3>{GetTranslation("ul. Merliniego")}</h3>
          <h3>{GetTranslation("202-511 Warszawa")}</h3>
        </div>
        <div className="BottomSegment">
          <h2 className="BottomHeader">
            {GetTranslation("Godziny otwarcia:")}
          </h2>
          <div className="GodzinyOtwarcia">
            <h3>{GetTranslation("Poniedziałek - Piątek")}</h3>
            <h3>{GetTranslation("08:00 - 22:30")}</h3>
          </div>
          <div className="GodzinyOtwarcia">
            <h3>{GetTranslation("Weekend i święta")}</h3>
            <h3>{GetTranslation("09:00 - 21:00")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BottomMenu);
