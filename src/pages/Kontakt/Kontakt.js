import React from "react";
import Container from "../../components/Container/Container";
import GetTranslation from "../../utils/GetTranslation";
import "./Kontakt.css";
import FacebookLogo from "../../media/facebookLogo.svg";
// import GoogleMapReact from "google-map-react";
// import {} from "react-goo";

function Kontakt(props) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const defaultMapProps = {
    center: {
      lat: 52.19649698321715,
      lng: 21.026134643915988,
    },
    zoom: 15,  };

  // function initMap() {
  //   // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru,
  //   });
  //   // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }

  return (
    <Container
      flexDirection="column"
      alignItems="center"
      margin="1.5em 0 3em 0"
    >
      <div className="Kontakt">
        <div className="First">
          {/* <div className="Map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDTCmANUXdNgZFX4K27gFhIA2xIhTUPNgU",
              }}
              defaultCenter={defaultMapProps.center}
              defaultZoom={defaultMapProps.zoom}
            ></GoogleMapReact>
          </div> */}
          <div className="GodzinyOtwarciaContainer">
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
          <div>
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
          <div>
            <h2 className="BottomHeader">{GetTranslation("Adres:")}</h2>
            <h3>{GetTranslation("ul. Merliniego")}</h3>
            <h3>{GetTranslation("202-511 Warszawa")}</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Kontakt;
