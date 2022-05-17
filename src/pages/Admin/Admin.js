import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import GetTranslation from "../../utils/GetTranslation";
import "./Admin.css";
import AktualnosciUpdate from "./AdminComponents/AktualnosciUpdate/AktualnosciUpdate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/main";

function Admin(props) {
  const sideBarOptions = [
    "Aktualnosci",
    "Zmień hasło",
    "adsfasfdsafasdfsa f",
    "dfa s",
  ];

  const [selectedOption, setSelectedOption] = React.useState(sideBarOptions[0]);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        // Signed in
        setLoggedIn(true);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      {!loggedIn && (
        <div className="NotLoggedIn">
          <h1 className="text-orange">{GetTranslation("Admin panel")}</h1>
          <input
            placeholder="Login"
            onChange={(ev) => setLogin(ev.target.value)}
          />
          <input
            placeholder="Hasło"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <h4
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
            className="ErrorText"
          >
            {error ? error : "d"}
          </h4>
          <div className="LogInButton" onClick={() => handleLogIn()}>
            <h3>{GetTranslation("Zaloguj się")}</h3>
          </div>
        </div>
      )}
      {loggedIn && (
        <div className="Admin">
          <div className="AdminDanger">
            <h2>{GetTranslation("Admin Panel")}</h2>
          </div>
          <div className="AdminMain">
            <SideBar
              onClick={(option) => setSelectedOption(option)}
              selectedOption={selectedOption}
              sideBarOptions={sideBarOptions}
              style={{ margin: "1em 1em" }}
            />
            <div className="AdminRight">
              {selectedOption === "Aktualnosci" && <AktualnosciUpdate />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
