function PrizeList() {
  const list = [
    {
      header: "Karnety",
      list: [
        {
          name: "30 dniowy",
          types: [
            {
              type: "Poranny (08:00 - 15:00)",
              prize: "130.00 PLN",
            },
            {
              type: "OPEN",
              prize: "190.00 PLN",
            },
            {
              type: "OPEN dla członków KW",
              prize: "160.00 PLN",
            },
          ],
        },
        {
          name: "8 wejść",
          types: [
            {
              type: "Poranny (08:00 - 15:00)",
              prize: "130.00 PLN",
            },
            {
              type: "OPEN",
              prize: "180.00 PLN",
            },
            {
              type: "OPEN dla członków KW",
              prize: "160.00 PLN",
            },
          ],
        },
        {
          name: "Karta magnetyczna (bezzwrotna)",
          types: [],
          prize: "10.00 PLN",
        },
      ],
    },
    {
      header: "Inne",
      list: [
        {
          name: "Wejście osoby asekurującej",
          types: [],
          prize: "0 PLN",
        },
        {
          name: "Wypożyczenie uprzęży",
          types: [],
          prize: "0 PLN",
        },
        {
          name: "Wypożyczenie przyrządu asekuracyjnego",
          types: [],
          prize: "0 PLN",
        },
        {
          name: "Wypożycznie liny dynamicznej",
          types: [],
          prize: "5 PLN",
        },
        {
          name: "Szkolenie wstępne",
          types: [],
          prize: "30 PLN",
        },
        {
          name: "Dopłata do karty MULTISPORT",
          types: [],
          prize: "5 PLN",
        },
      ],
    },
  ];

  return list;
}

export default PrizeList;
