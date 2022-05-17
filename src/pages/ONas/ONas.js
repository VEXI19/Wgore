import React from "react";
import Container from "../../components/Container/Container";
import GetTranslation from "../../utils/GetTranslation";
import "./ONas.css";

function ONas(props) {
  const firstParagraph =
    "<h3 >W ciągu 4 lat istnienia ściany, staraliśmy się stworzyć kompleksowe <b>centrum wspinaczkowe</b> w Warszawie, takie, w którym sami chcielibyśmy trenować i spędzać czas, przyjazne dla osób rozpoczynających swoją przygodę ze wspinaniem, a jednocześnie dające możliwość profesjonalnego treningu na każdym poziomie zaawansowania. Obecnie nasi klienci to zarówno osoby początkujące, jak i zawodnicy na najwyższym krajowym poziomie.\n\nJeśli jeszcze się nie wspinasz, a chciałbyś zacząć - w <b>miłej, koleżeńskiej atmosferze</b>, pod okiem <b>doświadczonych instruktorów</b>, oraz <b>w dogodnej lokalizacji</b> - zapraszamy! Z przyjemnością pomożemy Ci w stawianiu pierwszych wspinaczkowych kroków, nauczymy jak bezpiecznie się asekurować i podpowiemy co dalej! Jeżeli już się wspinasz i szukasz miejsca do rozwijania swojej pasji - przyjdź do nas! Ze swojej strony zapewnimy Ci najbardziej <b>kompleksową</b> i <b>przemyślaną bazę do treningu</b>, a instruktorzy szkolący na naszym obiekcie pomogą Ci pokierować Twoją wspinaczkową karierą - podpowiedzą jak efektywnie trenować i co robić, aby pokonywać coraz trudniejsze drogi i rozwinąć Twoje wspinanie!\n\nJeżeli Twój czas wolny już od dawna układa się według schematu trening-trip-rest-powtórz, campus nie kojarzy Ci się bynajmniej z miejscem, gdzie mieszkają studenci, a przeglądając nowe „Góry”, już przy spisie treści masz spocone dłonie, słowem - nie bardzo wyobrażasz sobie swoje życie bez wspinania - przenieś swoje treningi do nas!\n\nArena Wgórę to kompletne centrum wspinaczkowe - <b>wspinanie z liną</b> na dużej ścianie, <b>bouldery</b> i <b>obwody na dwóch różnorodnych boulderowniach</b>, <b>komplet przyrządów treningowych</b> (campus, drabina Bachara, chwytotablice, drążki, drabinki), oraz <b>dodatkowy sprzęt do ćwiczeń</b>, który na bieżąco uzupełniamy o ciekawe nowości. U nas znajdziesz wszystko w jednym miejscu - stworzonym przez ludzi, którzy sami tu trenują, przygotowując się do wyjazdów i zawodów.\n\nPierwszy wyjazd na skały po zimie spędzonej na naszej ścianie, będzie na pewno pozytywnym zaskoczeniem! Cenisz swój czas i wolisz spędzać go na szlifowaniu formy niż na dojazdach na ścianę i kręceniu kółek w poszukiwaniu miejsca do zaparkowania?\n\n<b>Nasza ścianka wspinaczkowa to tylko 10 minut od centrum - jak wolisz - autobusem, tramwajem lub metrem (<a href='kontakt'>dojazd</a>) i przestronny parking dla zmotoryzowanych.</b></h3>";
  const secondParagraph =
    "<h3 >To przede wszystkim ludzie - to oni tworzą to miejsce, rozwijają je, dbając przy tym o Wasze <b>bezpieczeństwo</b> i <b>satysfakcję z czasu spędzonego na ścianie</b>. Wychodzimy z założenia, że aby pomagać innym w rozwijaniu wspinaczkowej pasji, trzeba prezentować odpowiedni poziom <b>umiejętności, doświadczenia</b> i <b>wiedzy merytorycznej</b>, dlatego w naszym teamie nie ma przypadkowych osób. Instruktorzy dyżurni, których spotkacie na ścianie, to przede wszystkim aktywni wspinacze z różnych subdyscyplin tego sportu - są wśród nas zapaleni bulderowcy, zawodnicy regularnie odnoszący sukcesy na imprezach rangi Mistrzostw Polski i Pucharu Polski w prowadzeniu i bulderingu, wspinacze skalni z poziomu 8b i 8c, oraz członkowie Grupy Młodzieżowej Polskiego Związku Alpinizmu, łączy nas jedno - <b>pasja wspinania</b>.\n\nDrugą rzeczą na jaką stawiamy jest <b>otwartość</b>. Każdy z nas kiedyś zaczynał się wspinać, dlatego nie ma znaczenia, czy robisz V czy VI.5, czy wędkujesz pierwsze drogi w adidasach, czy właśnie realizujesz cykl treningowy pod pierwsze 8a - niezależnie od Twojego poziomu zaawansowania chętnie podzielimy się z Tobą naszą wiedzą i zadbamy, aby czas spędzony na <b>Arenie Wspinaczkowej Wgórę</b> był <b>pozytywnym doświadczeniem!</b></h3>";

  return (
    <Container flexDirection="column" alignItems="center" margin="1.5em 0 0 0">
      <div className="ONasHeader">
        <h1>{GetTranslation("Arena Wspinaczkowa Wgóre")}</h1>
        <h2>
          {GetTranslation("Najlepsze wspinanie w najlepszej lokalizacji")}
        </h2>
      </div>
      <iframe
        width="90%"
        style={{
          maxWidth: "800px",
          aspectRatio: "16/9",
          backgroundColor: "black",
        }}
        src="https://www.youtube.com/embed/ieK8JdXAXnA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="ONasText">
        {/* <h2>{GetTranslation("Arena Wspinaczkowa Wgóre!")}</h2> */}
        <div
          dangerouslySetInnerHTML={{
            __html: firstParagraph,
          }}
        ></div>
        <h2 className="text-secondary-header SecHeader">
          {GetTranslation("Arena Wgóre")}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: secondParagraph,
          }}
        ></div>
        <h2 className="text-secondary-header SecHeader">
          {GetTranslation("ZAPRASZAMY!")}
        </h2>
      </div>
    </Container>
  );
}

export default ONas;
