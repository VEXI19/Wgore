import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import GetTranslation from "../../utils/GetTranslation";
import JakZaczacData from "../../utils/JakZaczacPhotos";
import "./JakZaczac.css";
import { WindowWidthContext } from "../../App";
import FixedButtons from "../../components/FixedButtons/FixedButtons";
import Container from "../../components/Container/Container";
import { useSearchParams } from "react-router-dom";

export function JakZaczacBlock({ data, id }) {
  const windowWidth = React.useContext(WindowWidthContext);
  var photoWidth = windowWidth <= 700 ? "80vw" : "min(65vw, 700px)";
  var photoHeight = `calc(${photoWidth} * 37 / 65`;

  return (
    <div className="JakZaczacBlock" id={id}>
      <span className="h12">{GetTranslation(data.header)}</span>
      <div>
        <div className="JakZaczacBlockPhotoContainer">
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
        <div
          className="JakZaczacBlockFormatedText"
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        ></div>
      </div>
    </div>
  );
}

function JakZaczac(props) {
  const text =
    "<h3>Wspinanie jest wspaniałym sportem, <b>świetną aktywnością ogólnorozwojową,</b> ciekawym sposobem na <b>spędzanie wolnego czasu,</b> możliwością <b>poznawania nowych ludzi,</b> czy pretekstem do mniej lub bardziej <b>egzotycznych podróży</b> - dlatego przyjdź i przekonaj się sam, czym będzie ono dla Ciebie!<br><br>Wbrew powszechnej opinii, <b>wspinanie nie promuje ludzi o wyglądzie profesjonalnych kulturystów</b> - to aktywność wymagająca harmonijnej pracy całego ciała i koncentracji, a w pokonywaniu kolejnych metrów w pionie często bardziej niż umiejętność wielokrotnego podciągania się na drążku pomoże nam wyczucie <b>równowagi, balansowanie środkiem ciężkości ciała i umiejętność rozsądnego gospodarowania siłami.</b> Wśród naszych klientów są osoby na wszystkich poziomach zaawansowania - to Ty dostosowujesz trudność pokonywanych dróg do swojego aktualnego poziomu.</h3>";

  const [searchparams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    let section = searchparams.get("section");
    const sections = {
      szkolenie_wstepne: document.getElementById("section-0"),
      kurs_wspinaczkowy: document.getElementById("section-1"),
      zajecia_dorosli: document.getElementById("section-2"),
      zajecia_dzieci: document.getElementById("section-3"),
      trublue: document.getElementById("section-4"),
    };
    let element = sections[section];
    if (element) element.scrollIntoView({ behavoir: "smooth" });
  }, [searchparams]);

  return (
    <Container flexDirection="column" alignItems="center" margin="4em 0">
      <FixedButtons />
      <span className="h12">
        {GetTranslation(
          "Jeszcze się nie wspinałeś na ściance wspinaczkowej i chciałbyś spróbować?"
        )}
      </span>
      <div
        className="JakZaczacBlockFormatedText"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
      {JakZaczacData.map((elem, index) => {
        return (
          <JakZaczacBlock data={elem} id={`section-${index}`} key={index} />
        );
      })}
    </Container>
  );
}

export default JakZaczac;
