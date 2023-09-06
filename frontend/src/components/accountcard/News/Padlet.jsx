import React from "react";

function PadletEmbed() {
  return (
    <div
      className="padlet-embed"
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "2px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        background: "#F4F4F4",
      }}
    >
      <p style={{ padding: 0, margin: 0 }}>
        <iframe
          title="myframe"
          src="https://padlet.com/embed/zl6l7a791g4k0us8"
          frameBorder="0"
          allow="camera;microphone;geolocation"
          style={{
            width: "100%",
            height: "608px",
            display: "block",
            padding: 0,
            margin: 0,
          }}
        />
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          margin: 0,
          height: "28px",
        }}
      >
        <a
          href="https://padlet.com?ref=embed"
          style={{
            display: "block",
            flexGrow: 0,
            margin: 0,
            border: "none",
            padding: 0,
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://padlet.net/embeds/made_with_padlet_2022.png"
              width="114"
              height="28"
              style={{
                padding: 0,
                margin: 0,
                background: "0 0",
                border: "none",
                boxShadow: "none",
              }}
              alt="Fait avec Padlet"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default PadletEmbed;
