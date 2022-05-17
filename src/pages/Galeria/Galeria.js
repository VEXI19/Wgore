import React from "react";
import "./Galeria.css";
import SimpleImageSlider from "react-simple-image-slider";
import Container from "../../components/Container/Container";
import { WindowWidthContext } from "../../App";
import SzkolenieWstepne1 from "../../media/SzkolenieWstępne.jpg";
import KursWspinaczkowy1 from "../../media/KursWspinaczkowy.jpg";
import Trublue1 from "../../media/Trublue.jpg";
import GetTranslation from "../../utils/GetTranslation";

function GaleriaBlock({ data, isMarginTop }) {
  const windowWidth = React.useContext(WindowWidthContext);
  var photoWidth = windowWidth <= 700 ? "80vw" : "min(65vw, 700px)";
  var photoHeight = `calc(${photoWidth} * 37 / 65`;

  return (
    <div
      className="GaleriaBlock"
      style={isMarginTop ? { marginTop: "3em" } : {}}
    >
      {windowWidth > 800 && <h1>{GetTranslation(data.header)}</h1>}
      {windowWidth <= 800 && (
        <span className="h12">{GetTranslation(data.header)}</span>
      )}
      <SimpleImageSlider
        width={photoWidth}
        height={photoHeight}
        images={data.photos}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={4.0}
      />
    </div>
  );
}

function Galeria(props) {
  const data = [
    {
      photos: [SzkolenieWstepne1, KursWspinaczkowy1, Trublue1],
      header: "Tak się bawimy na Arenie Wspinaczkowej Wgóre",
    },
    {
      photos: [SzkolenieWstepne1, KursWspinaczkowy1, Trublue1],
      header: "Zadjęcia z zawodów",
    },
  ];

  return (
    <Container flexDirection="column" alignItems="center" margin="4em 0">
      {data.map((elem, index) => {
        return (
          <GaleriaBlock
            key={index}
            isMarginTop={index === data.length - 1}
            data={elem}
          />
        );
      })}
    </Container>
  );
}

export default Galeria;
