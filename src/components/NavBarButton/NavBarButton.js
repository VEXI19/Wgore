import React, { useRef } from "react";
import "./NavBarButton.css";
import { Link } from "react-router-dom";

function NavBarButton({ tabs, onClick }) {
  const { header, options, path } = tabs;
  const DropDownListElem = useRef(null);
  const H3 = useRef(null);

  return (
    <div
      className="NavBarButton"
      onClick={onClick ? () => onClick() : () => {}}
      onMouseEnter={() => {
        if (DropDownListElem.current !== null) {
          DropDownListElem.current.style.maxHeight = `${
            options.length * DropDownListElem.current.children[0].offsetHeight
          }px`;
        }
      }}
      onMouseLeave={() => {
        if (DropDownListElem.current !== null) {
          DropDownListElem.current.style.maxHeight = "0";
        }
      }}
    >
      <Link to={path} style={{ textDecoration: "none" }}>
        <h2 className="text-white nav-button-header">{header}</h2>
      </Link>
      {options.length > 0 && (
        <div ref={DropDownListElem}>
          {options.map((elem, index) => {
            return (
              <Link
                to={elem.url}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-white" id="NavBarH3" ref={H3}>
                  {elem.header}
                </h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NavBarButton;
