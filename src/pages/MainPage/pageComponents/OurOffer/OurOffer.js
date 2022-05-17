import React from "react";
import GetTranslation from "../../../../utils/GetTranslation";
import "./OurOffer.css";
import OurOfferList from "../../../../utils/OurOfferList";
import OurOfferBlock from "../../../../components/OurOfferBlock/OurOfferBlock";
import Container from "../../../../components/Container/Container";

function OurOffer(props) {
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      backgroundColor="var(--white)"
    >
      <h1 className="OurOfferHeader">{GetTranslation("Nasza oferta")}</h1>
      <div className="OurOfferBlocks">
        {OurOfferList().map((elem, index) => {
          return <OurOfferBlock tabs={elem} key={index} />;
        })}
      </div>
    </Container>
  );
}

export default OurOffer;
