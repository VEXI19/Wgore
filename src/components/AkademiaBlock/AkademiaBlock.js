import React from "react";
import GetTranslation from "../../utils/GetTranslation";
import "./AkademiaBlock.css";

function AkademiaBlock({ tabs }) {
  const { header, text, video, index } = tabs;

  return (
    <div className="AkademiaBlock">
      <div className="AkademiaBlockHeader">
        <h2>{GetTranslation(header)}</h2>
        {header !== "Podziękowania" && (
          <h3>{GetTranslation("Ocinek") + " " + index} </h3>
        )}
      </div>
      <h3 className="AkademiaText">{GetTranslation(text)}</h3>
      {video && (
        <iframe
          width="90%"
          style={{
            maxWidth: "800px",
            aspectRatio: "16/9",
            backgroundColor: "black",
          }}
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default AkademiaBlock;
