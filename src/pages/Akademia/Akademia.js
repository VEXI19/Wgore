import React from "react";
import AkademiaBlock from "../../components/AkademiaBlock/AkademiaBlock";
import Container from "../../components/Container/Container";
import AkademiaList from "../../utils/AkademiaList";
import GetTranslation from "../../utils/GetTranslation";
import "./Akademia.css";

function Akademia(props) {
  return (
    <Container flexDirection="column" alignItems="center" margin="1.5em 0">
      <h1 className="text-header">{GetTranslation("Akademia")}</h1>
      {AkademiaList().map((elem, index) => {
        return (
          <AkademiaBlock tabs={{ ...elem, index: index + 1 }} key={index} />
        );
      })}
    </Container>
  );
}

export default Akademia;
