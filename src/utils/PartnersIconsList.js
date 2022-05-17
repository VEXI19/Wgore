import FunPark from "../media/FunPark.jpg";
import KlubWysokogórski from "../media/KlubWysokogórski.jpg";
import UKA from "../media/UKA.jpg";
import Polskok from "../media/Polskok.jpg";
import ZSWW from "../media/ZSWW.jpg";
import BlastArena from "../media/BlastArena.jpg";

function PartnersIconsList() {
  const list = [
    {
      icon: FunPark,
      link: "https://www.funparkdigiloo.pl/",
    },
    {
      icon: KlubWysokogórski,
      link: "https://kw.warszawa.pl/",
    },
    {
      icon: UKA,
      link: "https://www.uka.pl/",
    },
    {
      icon: Polskok,
      link: "https://polskok.com.pl/",
    },
    {
      icon: ZSWW,
      link: "https://um.warszawa.pl/waw/markawarszawa",
    },
    {
      icon: BlastArena,
      link: "https://www.blastarena.pl/",
    },
  ];

  return list;
}

export default PartnersIconsList;
