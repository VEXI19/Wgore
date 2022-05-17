import React, { useContext, useRef } from "react";
import Container from "../Container/Container";
import "./NavBar.css";
import Logo from "../../media/logo.png";
import NavBarButton from "../NavBarButton/NavBarButton";
import NavBarList from "../../utils/NavBarList.js";
import { ClickContext, WindowWidthContext } from "../../App";
import MenuIcon from "../../media/menu.svg";
import { Link } from "react-router-dom";

function NavBar(props) {
  const windowWidth = useContext(WindowWidthContext);
  const clickEvent = useContext(ClickContext);

  const [showDropDown, setShowDropDown] = React.useState(false);
  const DropDown = useRef();
  const NavBarMobile = document.getElementsByClassName("NavBarMobile")[0];

  const onClickButton = () => {
    setShowDropDown(false);
  };

  React.useEffect(() => {
    if (DropDown.current) {
      if (showDropDown) {
        DropDown.current.style.maxHeight = `700px`;
      }
      // DropDown.style.padding = showDropDown ? "0.5em 5vw" : "0 5vw";
    }
  }, [showDropDown, DropDown]);

  React.useEffect(() => {
    var isInClick = false;
    if (clickEvent) {
      clickEvent.path.map((elem) => {
        if (elem === DropDown.current) isInClick = true;
        if (elem === NavBarMobile) setShowDropDown(true);
      });
      if (!isInClick && showDropDown) {
        DropDown.current.style.maxHeight = "0";
        setTimeout(() => setShowDropDown(false), 400);
      }
    }
  }, [clickEvent, DropDown]);

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      backgroundColor="var(--black)"
      flexDirection="column"
      position={windowWidth < 800 ? "fixed" : "relative"}
      style={{ zIndex: "100", top: 0, left: 0 }}
    >
      <div className="Main" id="NavBar">
        <Link to={"/"}>
          <img
            className="Logo"
            style={
              windowWidth < 800
                ? {
                    transform: `translateX(calc(45vw - 50%))`,
                  }
                : {}
            }
            src={Logo}
            alt=""
          />
        </Link>
        {windowWidth >= 800 && (
          <div className="Navbar">
            {NavBarList().map((elem, index) => {
              return <NavBarButton tabs={elem} key={index} />;
            })}
          </div>
        )}
        {windowWidth < 800 && (
          <div className="NavBarMobile">
            <img
              className="img img-white"
              style={{ cursor: "pointer" }}
              src={MenuIcon}
              alt=""
            />
          </div>
        )}
      </div>
      {windowWidth < 800 && showDropDown && (
        <div className="DropDown" id="DropDown" ref={DropDown}>
          {NavBarList().map((elem, index) => {
            return (
              <NavBarButton
                tabs={elem}
                onClick={() => onClickButton()}
                key={index}
              />
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default NavBar;
