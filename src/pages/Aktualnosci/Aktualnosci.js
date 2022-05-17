import React from "react";
import AktualnosciBlock from "../../components/AktualnosciBlock/AktualnosciBlock";
import Container from "../../components/Container/Container";
import GetTranslation from "../../utils/GetTranslation";
import "./Aktualnosci.css";
import SekcjeDorosli from "../../media/SkecjeDorośli.jpg";
import FixedButtons from "../../components/FixedButtons/FixedButtons";

function Aktualnosci(props) {
  const dev_data = [
    {
      photo: SekcjeDorosli,
      text: "<h2>Dzien dobry</h2><br><h3>asdlfk jasdf kjaskjfja skfha shfdkashfkahs kfhsdhf kshdf <b> asdfkhasdflhasdkhf  fsdkf h.f,s</b><br><br> akfdjalsh fash f hsf </h3>",
      link: "https://www.google.com",
    },
    {
      photo: SekcjeDorosli,
      text: "asdfasdf",
      link: "",
    },
  ];

  return (
    <Container flexDirection="column" alignItems="center" margin="2em 0">
      <h1 className="AktualnosciHeader">{GetTranslation("Aktualności")}</h1>
      {dev_data.map((elem, index) => {
        return <AktualnosciBlock key={index} data={elem} />;
      })}

      <FixedButtons />
    </Container>
  );
}

export default Aktualnosci;
