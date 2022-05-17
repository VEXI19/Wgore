import React from "react";
import "./Sekcje.css";
import Container from "../../components/Container/Container";
import { JakZaczacBlock } from "../JakZaczac/JakZaczac";
import SzkolenieWstepne1 from "../../media/SzkolenieWstępne.jpg";
import KursWspinaczkowy1 from "../../media/KursWspinaczkowy.jpg";
import Trublue1 from "../../media/Trublue.jpg";

function Sekcje(props) {
  const data = {
    header: "Sekcje wspinaczkowe dla dorosłych",
    photos: [SzkolenieWstepne1, KursWspinaczkowy1, Trublue1],
    text: "<h3>Zorganizowane zajęcia wspinaczkowe pod okiem doświadczonych instruktorów. Jeżeli chcecie wspinać się lepiej, doskonalić technikę, być silniejszymi wspinaczami, albo po prostu szukacie grupy ludzi do wspólnego wspinania, te zajęcia są dla Was!<br><br><h2><b>SEKCJE POCZĄTKUJĄCE</b></h2><h3>Jeżeli do tej pory wspinaliście się tylko na wędkę i przy użyciu autoasekuracji Trublue, lub jesteście świeżo po kursie ściankowym i chcielibyście zacząć się wspinać, zapraszamy! Tutaj pomożemy Wam w stawianiu pierwszych wspinaczkowych kroków, nauczymy podstaw poruszania się w pionowym świecie, oraz poznamy z innymi ludźmi, którzy zaczynają uprawiać nasz sport!</h3><br><br><h2><b>SEKCJE ZAAWANSOWANE</b></h2><h3>Regularnie pojawiacie się na ścianie, asekurujecie z dołem, chcielibyście wspinać się lepiej, ale często cierpicie na brak partnera, motywacji lub po prostu pomysłu „co mam dalej zrobić z tym moim wspinaniem”? Jeśli tak, zapraszamy na sekcje zaawansowane! Tutaj dowiecie się jak wygląda trening wspinaczkowy, dopracujecie technikę, oraz poznacie ludzi do wspólnego wspinania i treningów!<br><br><b>Zajęcia odbywają się 2 razy w tygodniu po 2h.<br>Informacje i zapisy:</b> sekcje@wgore.eu</h3>",
  };

  return (
    <Container flexDirection="column" alignItems="center" margin="0 0 4em 0">
      <JakZaczacBlock data={data} id={`sekcja-dorosli`} />
    </Container>
  );
}

export default Sekcje;
