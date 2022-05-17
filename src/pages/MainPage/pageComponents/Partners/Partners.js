import React from "react";
import Container from "../../../../components/Container/Container";
import GetTranslation from "../../../../utils/GetTranslation";
import PartnersIconsList from "../../../../utils/PartnersIconsList";
import "./Partners.css";

function Partners(props) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Container flexDirection="column" alignItems="center" margin="2em 0">
      <h1 className="OurOfferHeader">{GetTranslation("Partnerzy")}</h1>
      <div className="Partners">
        {PartnersIconsList().map((elem, index) => {
          return (
            <img
              src={elem.icon}
              onClick={() => openInNewTab(elem.link)}
              key={index}
              alt=""
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Partners;
