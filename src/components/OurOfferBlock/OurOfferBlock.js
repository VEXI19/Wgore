import React from "react";
import { Link } from "react-router-dom";
import GetTranslation from "../../utils/GetTranslation";
import Button from "../Button/Button";
import "./OurOfferBlock.css";

function OurOfferBlock({ tabs }) {
  const { header, text, photo, url } = tabs;
  const img = React.useRef();

  return (
    <div className="OurOfferBlock">
      <div>
        <div>
          <div
            onMouseEnter={() => (img.current.style.transform = "scale(1.1)")}
            onMouseLeave={() => (img.current.style.transform = "scale(1)")}
          >
            <Link to={url}>
              <img src={photo} id="OurOfferPhoto" ref={img} alt="" />
            </Link>
          </div>
          <div>
            <h2>{GetTranslation(header)}</h2>
            <h3>{GetTranslation(text)}</h3>
          </div>
        </div>
        <Button url={url} header="Więcej" />
      </div>
    </div>
  );
}

export default OurOfferBlock;
