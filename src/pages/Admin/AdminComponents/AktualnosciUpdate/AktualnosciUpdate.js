import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import GetTranslation from "../../../../utils/GetTranslation";
import "./AktualnosciUpdate.css";
import TextEditor from "../../../../components/TextEditor/TextEditor";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { db, storage } from "../../../../firebase/main";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getBlob } from "firebase/storage";
import photo from "../../../../media/KlubWysokogórski.jpg";

function CropDemo({ src }) {
  const [crop, setCrop] = React.useState();
  return (
    <ReactCrop crop={crop} aspect={1} onChange={(c) => setCrop(c)}>
      <img src={src} alt="" />
    </ReactCrop>
  );
}

function AktualnosciUpdate(props) {
  React.useEffect(() => {
    const getData = async () => {
      const Aktualnosci = [];
      const querySnapshot = await getDocs(collection(db, "Aktualnosci"));
      querySnapshot.forEach((doc) => {
        Aktualnosci.push({ ...doc.data(), id: doc.id });
      });
      console.log("getData", Aktualnosci);
      setAktualnosciList(Aktualnosci);
    };
    getData().then(() => console.log("Data retrieved"));
  }, []);

  const [AktualnosciList, setAktualnosciList] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(
    AktualnosciList[0]
  );
  const [photoSRC, setPhotoSRC] = React.useState("");
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    console.log("check");
    AktualnosciList.forEach(async (element) => {
      if (element.id === selectedOption) {
        setText(element.text);
        const storageRef = ref(storage, `/${element.photo}`);
        await getBlob(storageRef)
          .then((value) => {
            setPhotoSRC(value);
            console.log("blob", value);
          })
          .catch((e) => console.log(e));
        // getDownloadURL()
        // .then((url) => {
        //   // `url` is the download URL for 'images/stars.jpg'

        //   // This can be downloaded directly:
        //   const xhr = new XMLHttpRequest();
        //   xhr.responseType = 'blob';
        //   xhr.onload = (event) => {
        //     const blob = xhr.response;
        //   };
        //   xhr.open('GET', url);
        //   xhr.send();

        //   // Or inserted into an <img> element
        //   const img = document.getElementById('myimg');
        //   img.setAttribute('src', url);
        // })
        // .catch((error) => {
        //   // Handle any errors
        // });
        // setPhotoSRC(element.photo);
      }
    });
  }, [selectedOption, AktualnosciList]);

  const handleSubmit = async () => {
    if (photoSRC) {
      const storageRef = ref(storage, "/Aktualnosci_zdjecia/Phtoo2");

      await uploadBytes(storageRef, photoSRC).then(async (snapshot) => {
        console.log("Uploaded a blob or file!");
        console.log("snapshot", snapshot);
        await addDoc(collection(db, "Aktualnosci"), {
          text: text,
          date: new Date(),
          photo: snapshot.metadata.fullPath,
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((e) => console.log("Error adding document: ", e));
      });
    }
  };
  return (
    <div className="AktualnosciUpdate">
      <h2>{GetTranslation("Aktualności")}</h2>
      <div className="AktualnosciUpdateMain">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "2em",
          }}
        >
          <div
            className="AktualnosciBlockButton"
            style={{
              width: "100%",
              marginBottom: "0.5em",
              padding: "0.5em 0.5em",
              textAlign: "center",
            }}
            onClick={() => {
              setSelectedOption();
              setText("");
              setPhotoSRC(null);
            }}
          >
            <h3>{GetTranslation("Dodaj nowy")}</h3>
          </div>

          <SideBar
            sideBarOptions={AktualnosciList.map((elem) => {
              var date = new Date(elem.date.seconds * 1000);
              var date_formated =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
              return [date_formated, elem.id];
            })}
            selectedOption={selectedOption}
            // style={{ marginRight: "2em" }}
            onClick={(option) => setSelectedOption(option)}
          />
        </div>
        <div className="AktualnosciUpdateEditor">
          <div className="ImagePick">
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={(ev) => {
                // document.getElementById("img").file = ev.target.files[0];
                // const objectURL = window.URL.createObjectURL(
                //   ev.target.files[0]
                // );
                setPhotoSRC(ev.target.files[0]);
              }}
            />
            {photoSRC && <CropDemo src={photoSRC} />}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextEditor
              handleChange={(text) => {
                setText(text);
              }}
              text={text}
            />
            <div
              className="AktualnosciBlockButton"
              onClick={() => handleSubmit()}
              style={{
                marginTop: "1em",
                width: "fit-content",
                alignSelf: "center",
              }}
            >
              <h3>{GetTranslation("Wyślij")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AktualnosciUpdate;
