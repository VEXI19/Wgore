import React from "react";
import Container from "../../components/Container/Container";
import GetTranslation from "../../utils/GetTranslation";
import "./Telefony.css";
import TelefonyList from "../../utils/TelefonyList";

function Telefony(props) {
  return (
    <Container flexDirection="column" alignItems="center" margin="3em 0">
      <h1 className="align-text-center">
        {GetTranslation("Telefony do naszych instruktorów")}
      </h1>
      <h2 className="TelefonyText">
        {GetTranslation(
          "Zachęcamy do bezpośredniego kontaktu z naszymi instruktorami. Uzyskają państwo informacje oraz potwierdzą dostępność miejsc oraz terminów zajęć."
        )}
      </h2>
      <div className="TelefonyLista">
        {TelefonyList.map((elem, index) => {
          const text = `<h2><b>${elem.name} - <span class="text-orange"><b>${elem.number}</b></span></b></h2>`;
          return (
            <div
              className="align-text-center"
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          );
        })}
      </div>
    </Container>
  );
}

export default Telefony;
