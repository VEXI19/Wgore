import React from "react";
import GetTranslation from "../../utils/GetTranslation";
import "./SideBar.css";

export function AdminSideBarOption({
  text,
  onClick,
  isFirst,
  isLast,
  isSelected,
}) {
  const style1 = isFirst
    ? {
        borderRadius: "0.5em 0.5em 0 0",
        borderBottom: "none",
      }
    : isLast
    ? {
        borderRadius: "0 0 0.5em 0.5em",
      }
    : {
        borderBottom: "none",
      };

  const style2 = isSelected ? { backgroundColor: "rgb(230,230,230)" } : {};

  return (
    <div
      className="SideBarOption"
      onClick={() => onClick()}
      style={{ ...style1, ...style2 }}
    >
      <h3>{GetTranslation(text)}</h3>
    </div>
  );
}

function SideBar({
  sideBarOptions,
  dictionary,
  selectedOption,
  onClick,
  style,
}) {
  return (
    <div className="SideBar" style={style}>
      {sideBarOptions.map((elem, index) => {
        return (
          <AdminSideBarOption
            text={Array.isArray(elem) ? elem[0] : elem}
            isSelected={
              Array.isArray(elem)
                ? elem[1] === selectedOption
                : elem === selectedOption
            }
            isFirst={index === 0}
            isLast={index === sideBarOptions.length - 1}
            onClick={() => {
              if (Array.isArray(elem)) onClick(elem[1]);
              else onClick(elem);
            }}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
