import React from "react";
import { WindowWidthContext } from "../../App";
import Container from "../../components/Container/Container";
import GetTranslation from "../../utils/GetTranslation";
import PrizeList from "../../utils/PrizeList";
import "./Cennik.css";

function Cennik(props) {
  const windowWidth = React.useContext(WindowWidthContext);

  return (
    <Container
      flexDirection="column"
      margin="1.5em 0 4em 0"
      alignItems="center"
    >
      <h1>{GetTranslation("Cennik:")}</h1>
      <div className="Jednorazowe">
        {windowWidth >= 550 && (
          <>
            <h2 className="text-orange JednorazoweHeader">
              {GetTranslation("Wejścia jednorazowe")}
            </h2>
            <h3 className="do15 Godzina">{GetTranslation("do godz. 15:00")}</h3>
            <h3 className="Godzina">{GetTranslation("od godz. 15:00")}</h3>
            <h2 className="Okres">{GetTranslation("Poniedziałek - Piątek")}</h2>
            <h2 className="text-orange Cena">{GetTranslation("19.00 PLN")}</h2>
            <h2 className="text-orange Cena">{GetTranslation("32.00 PLN")}</h2>
            <h2 className="Okres">{GetTranslation("Weekendy i święta")}</h2>
            <h2 className="text-orange Cena">{GetTranslation("32.00 PLN")}</h2>
            <h2 className="text-orange Cena">{GetTranslation("32.00 PLN")}</h2>
          </>
        )}
        {windowWidth < 550 && (
          <>
            <h2 className="text-orange JednorazoweHeader">
              {GetTranslation("Wejścia jednorazowe")}
            </h2>
            <h2 className="Okres">{GetTranslation("Poniedziałek - Piątek")}</h2>
            <div>
              <h2 className="Godzina">{GetTranslation("do godz. 15:00")}</h2>
              <h2 className="text-orange Cena">
                {GetTranslation("19.00 PLN")}
              </h2>
            </div>
            <div>
              <h2 className="Godzina">{GetTranslation("od godz. 15:00")}</h2>
              <h2 className="text-orange Cena">
                {GetTranslation("32.00 PLN")}
              </h2>
            </div>
            <h2 className="Okres">{GetTranslation("Weekendy i święta")}</h2>
            <div>
              <h2 className="Godzina">{GetTranslation("do godz. 15:00")}</h2>
              <h2 className="text-orange Cena">
                {GetTranslation("32.00 PLN")}
              </h2>
            </div>
            <div>
              <h2 className="Godzina">{GetTranslation("od godz. 15:00")}</h2>
              <h2 className="text-orange Cena">
                {GetTranslation("32.00 PLN")}
              </h2>
            </div>
          </>
        )}
      </div>

      {PrizeList().map((elem, index) => {
        return (
          <div className="Karnety" key={index}>
            <h2 className="text-orange KarnetyHeader">
              {GetTranslation(elem.header)}
            </h2>
            {elem.list.map((elem, index) => {
              return (
                <div
                  style={
                    elem.types.length === 0
                      ? {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }
                      : {}
                  }
                  key={index}
                >
                  <h2 className="Okres Margin-top">
                    {GetTranslation(elem.name)}
                  </h2>
                  {elem.types && (
                    <div>
                      {elem.types.map((elem, index) => {
                        return (
                          <div key={index}>
                            <h2
                              className="Godzina"
                              style={{ textAlign: "left" }}
                            >
                              {GetTranslation(elem.type)}
                            </h2>
                            <h2 className="text-orange Cena">
                              {GetTranslation(elem.prize)}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {elem.types.length === 0 && (
                    <h2 className="text-orange Cena Margin-top">
                      {GetTranslation(elem.prize)}
                    </h2>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default Cennik;
