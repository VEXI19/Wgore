function AkademiaList() {
  const list = [
    {
      header: "Techniki podstawowe cz.1",
      text: "Zapraszamy do obejrzenia pierwszego odcinka z serii Akademia Wspinania Mazda. Dowiecie się na nim o podstawowych i poprawnych technikach wspinaczkowych. Na filmie przedstawimy Ci na co należy zwrócić uwagę na samym początku wspinania, aby dobrze wykonywać podstawowe ruchy wspinaczkowe. Film dedykowany dla osób stawiających pierwsze kroki na ściance wspinaczkowej.",
      video: "https://www.youtube.com/embed/0jxVd5Rkm78",
    },
    {
      header: "Techniki dynamiczne cz.1",
      text: "Podobała się część pierwsza? Andrzej, mistrz Polski w Boulderingu przekaże Ci kwintesencję swojej wiedzy w każdym z odcinków! W odcinku drugim dowiesz się o kolejnych romaitych technikach wspinaczkowych. Technika dynamiczna, której opanowanie jest podstawą do dalszej wspinaczki, pomoże Ci sprawnie poruszać się w niewygodnych pozycjach. Wiesz co to deadpoint we wspinaczce? Po obejrzeniu tego odcinka, to pojęcie stanie się dla Ciebie chlebem powszednim!",
      video: "https://www.youtube.com/embed/IZT_GmlVU78",
    },
    {
      header: "Techniki podstawowe cz.2",
      text: "Jeżeli nie pomineliście dwóch wcześniejszych odcinków, to zasada trzech punktów podparcia jest Wam już dobrze znana. Z tego filmu dowiecie się również o regule prostych rąk. W połączeniu z zasadą trzech punktów podparcia, ta fundamentalna wiedza i wyćwiczone umiejętności pomogą Ci prawidołowo rozwijać się na ściance.",
      video: "https://www.youtube.com/embed/rBPO11cCP4I",
    },
    {
      header: "Techniki dynamiczne cz.2",
      text: "Widzimy, że chłoniesz wiedzę jak Tales z Miletu! I to nam się podoba! Przechodzimy do kolejnej porcji merytorycznej wiedzy! W kolejnym z odcinków dowiesz się o strzałach i skokach na ściance!Jest coraz ciężej, ale nikt nie mówił, że wspinaczka to łatwy sport!Zapraszamy do obejrzenia!",
      video: "https://www.youtube.com/embed/OYSFAGFu1tg",
    },
    {
      header: "Praca na stopniach",
      text: "Witamy w kolejnej części. Cieszymy się, że wiedzę zaczerpniętą z naszych filmów przenosicie do treningu na ściance. I bardzo dobrze, sucha teoria bez praktyki nie ma sensu. Mono-strzały już opanowane? Więc jedziemy dalej! W tym odcinku dowiesz się o pracy na stopniach i prawidłowym stawianiu na nich stóp. Pamiętaj, że jeżli masz jakieś wątpliwości, instruktor na ściance chętnie podpowie jak poprawnie wykonywać dane ćwiczenie. Bezpieczeństwo i rozwaga to podstawa!",
      video: "https://www.youtube.com/embed/LuNomi86j-U",
    },
    {
      header: "Technika skrętna cz.1",
      text: "Zaszliście tak daleko? Jesteście prawdziwymi spartanami! Bardzo się cieszymy, że chętnie czerpiecie wiedzę z naszych filmów! Dzięki Wam, tworzymy kolejne materiały! W tej części dowiecie się o tajnikach oraz treningu w przewieszeniu. Czyli technice skrętnej. Dzięki jej poznaniu przejście z trudnej pozycji stanie się dużo prostsze. Unikniesz w ten sposób blokujących pozycji. Dowiesz się w którą stronę się skręcić, aby przemieścić się dalej.",
      video: "https://www.youtube.com/embed/fwDPuKcbWlI",
    },
    {
      header: "Technika skrętna cz.2",
      text: "Akademia Wspinania Mazda powraca! Po przerwie wracamy z kolejnym odcinkiem AWM - czyli drugą częścią rozważań nad tajnikami techniki skrętnej. Tym razem Mechanior opowie o detalach tech trudnej sztuki i jej zastosowaniu w zależności od kierunku ruchu czy przewieszenia w jakim się wspinamy. Jak zwykle znajdziecie też katalog błędów, które skutecznie uniemożliwiają poprawne skręty, a także przydatne ćwiczenia. Wszystko to, jak poprzednio, zilustruje własną nienaganną osobą książę techniki skrętnej - Adam Pracownik.",
      video: "https://www.youtube.com/embed/GPX1weBVmzI",
    },
    {
      header: "Haczenie pięty i podhaczanie palców",
      text: "Przed Wami ósmy, przedostatni odcinek Akademii Wspinania Mazda. Tym razem prawdziwy wspinaczkowy pedicure, czyli Andrzej zajmie się Waszymi piętami i palcami. Kiedy używać podhaczeń, kiedy pięty, kiedy palców, których ich części, jak zrobić z nogi trzecią rękę i co powinna wtedy robić reszta naszego ciała - tego wszystkiego dowiecie się z materiału poniżej!",
      video: "https://www.youtube.com/embed/ei4vGQ0bXUg",
    },
    {
      header: "Pozycje stabilizacyjne",
      text: "W tej monumentalnej, półgodzinnej podróży, poznacie wszystkie pozycje i triki, które pozwalają nam podczas wspinania odpoczywać, magnezjować, wykonywać wpinki, lustrować kolejne partie drogi, podziwiać piękne okoliczności przyrody lub z wygodnej perspektywy ganić mało zaangażowanego w asekurację kolegę bądź koleżankę. Mamy nadzieję, że podzielicie nasze wrażenie syntezy poprzednich odcinków i omawianych technik, przez ten może nie najkrótszy, ale na pewno bardzo przydatny, również pod kontem trwającego sezonu skalnego, wykład.",
      video: "https://www.youtube.com/embed/P6J1YG2O70I",
    },
    {
      header: "Podziękowania",
      text: "Serdecznie dziękujemy wszystkim, którzy śledzili naszą serię - mamy szczerą nadzieję, że udało nam się choć trochę rozjaśnić mroki wspinaczkowej techniki, usystematyzować pojęcia, a przede wszystkim, stworzyć Wam wygodną i przejrzyście podaną możliwość doskonalenia Waszego wspinania!\n\nZawiedzie się jednak ten, kto liczył na rzewne pożegnania i patetyczne nuty - zamknęliśmy pierwszy cykl wykładów, natomiast nie kończymy pracy nad Akademią - Andrzej bynajmniej nie odwiesza butów na kołek, ani tym bardziej nie odkłada okularów do etui. Mamy kilka kolejnych pomysłów, z których efektami zapoznacie się, mamy nadzieję, już niebawem.\n\nDo zobaczenia!\n\nAndrzej Mecherzyński-Wiktor, Marcin Kopciński",
      video: null,
    },
  ];

  return list;
}

export default AkademiaList;
