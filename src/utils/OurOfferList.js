import KursWspinaczkowy from "../media/KursWspinaczkowy.jpg";
import SkecjeDorośli from "../media/SkecjeDorośli.jpg";
import SzkolenieWstępne from "../media/SzkolenieWstępne.jpg";
import Trublue from "../media/Trublue.jpg";
import ZajęciaDorośli from "../media/ZajęciaDorośli.jpg";
import ZajęciaDzieci from "../media/ZajęciaDzieci.jpg";

function OurOfferList() {
  const list = [
    {
      header: "Szkolenie Wstępne",
      text: "Dopiero zaczysznasz swoją przygodęze wspinaczką? Sprawdź od czego zacząć i zapisz się na szkolenie wstępne!",
      photo: SzkolenieWstępne,
      url: "/jakzaczac?section=szkolenie_wstepne",
    },
    {
      header: "Kurs Wspinaczkowy",
      text: "Pełny kurs wspinaczkowy z dolną asekuracją.",
      photo: KursWspinaczkowy,
      url: "/jakzaczac?section=kurs_wspinaczkowy",
    },
    {
      header: "Zajęcia wprowadzające dla dorosłych",
      text: "Zapraszamy na półtoragodzinne zajęcia wprowadzające do wspinania pod okiem instruktora!",
      photo: ZajęciaDorośli,
      url: "/jakzaczac?section=zajecia_dorosli",
    },
    {
      header: "Zajęcia wprowadzające dla dzieci",

      text: "Fantastyczne zajęcia dla dziecina ściance wspinaczkowej!",
      photo: ZajęciaDzieci,
      url: "/jakzaczac?section=zajecia_dzieci",
    },
    {
      header: "Trublue",
      text: "Doskonała propozycja dla tych, którzy dopiero zaczynają się wspinać!",
      photo: Trublue,
      url: "/jakzaczac?section=trublue",
    },
    {
      header: "Sekcja dorośli",
      text: "Zorganizowane zajęcia wspinaczkowe pod okiem doświadczonych instruktorów.",
      photo: SkecjeDorośli,
      url: "/sekcje",
    },
  ];

  return list;
}

export default OurOfferList;
