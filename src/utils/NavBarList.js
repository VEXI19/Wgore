function NavBarList() {
  const list = [
    {
      header: "Home",
      path: "",
      options: [],
    },
    {
      header: "Akademia",
      path: "akademia",
      options: [],
    },
    {
      header: "O nas",
      path: "onas",
      options: [],
    },
    {
      header: "Jak zacząć",
      path: "jakzaczac",
      options: [
        {
          header: "Szkolenie Wstępne",
          url: "/jakzaczac?section=szkolenie_wstepne",
        },
        {
          header: "Kurs Wspinaczkowy",
          url: "/jakzaczac?section=kurs_wspinaczkowy",
        },
        {
          header: "Zajęcia wprowadzające dla dorosłych",
          url: "/jakzaczac?section=zajecia_dorosli",
        },
        {
          header: "Zajęcia wprowadzjące dla dzieci",
          url: "/jakzaczac?section=zajecia_dzieci",
        },
        { header: "Trublue", url: "/jakzaczac?section=trublue" },
      ],
    },
    {
      header: "Sekcje",
      path: "sekcje",
      options: [
        { header: "Sekcje Dorośli", url: "/sekcje" },
        { header: "Telefony Instruktorów", url: "/telefonydoinstruktorow" },
      ],
    },
    {
      header: "Galeria",
      path: "galeria",
      options: [],
    },
    {
      header: "Cennik",
      path: "cennik",
      options: [],
    },
    {
      header: "Aktualności",
      path: "aktualnosci",
      options: [],
    },
    {
      header: "Kontakt",
      path: "kontakt",
      options: [],
    },
  ];

  return list;
}

export default NavBarList;
