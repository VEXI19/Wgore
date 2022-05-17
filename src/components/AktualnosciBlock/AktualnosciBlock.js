import React from "react";
import GetTranslation from "../../utils/GetTranslation";
import Container from "../Container/Container";
import "./AktualnosciBlock.css";

function AktualnosciBlock({ data }) {
  return (
    <div className="AktualnosciBlock" style={{ marginTop: "2em" }}>
      <img src={data.photo} alt="" />
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <div dangerouslySetInnerHTML={{ __html: data.text }} />
        {data.link !== "" && (
          <div
            className="AktualnosciBlockButton"
            onClick={() =>
              window.open(data.link, "_blank", "noopener noreferrer")
            }
          >
            <h3>{GetTranslation("Czytaj dalej")}</h3>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AktualnosciBlock;
