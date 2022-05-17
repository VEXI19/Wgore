import React, { useRef } from "react";
import GetTranslation from "../../utils/GetTranslation";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ header, color = "var(--orange)", url }) {
  const bg = useRef();

  return (
    <Link to={url} style={{ textDecoration: "none", color: "black" }}>
      <div
        className="Button"
        id="Button"
        style={{ border: `1px solid ${color}` }}
        onMouseEnter={() => {
          bg.current.style.width = "100%";
        }}
        onMouseLeave={() => {
          bg.current.style.width = "0%";
        }}
      >
        <div className="ButtonBackground" ref={bg} />
        <h2>{GetTranslation(header)}</h2>
      </div>
    </Link>
  );
}

export default Button;
