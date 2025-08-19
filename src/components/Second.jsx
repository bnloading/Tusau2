import React from "react";

const Second = () => {
  return (
    <div
      className="section"
      style={{
        backgroundImage: ' url("/image/2.jfif")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        className="content"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          className: "animate-fadeIn",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            color: "#4B0082",
            fontFamily: "MonAmour",
            lineHeight: "1.8",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <span>Қуаныштың таңы арайланыпатты кел,</span>
          <span>Ақтарылсын жүректерденақ тілек.</span>
          <span>Балаларымыздың тұсаукесер, біржасы,</span>
          <span>Тәй-тәй басқан қадамынабақ тілек.</span>

          <span>
            <span
              style={{
                color: "#FF69B4",
                fontFamily: "MonAmour",
                fontSize: "2.5rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "2px",
              }}
            >
              Ясин
            </span>
            <span style={{ margin: "0 10px" }}>,</span>
            <span
              style={{
                color: "#6A5ACD",
                fontFamily: "MonAmour",
                fontSize: "2.5rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "2px",
              }}
            >
              Жасмин
            </span>
            <span> балаларымыздың</span>
          </span>
          <span>біржас тұсаукесер тойына</span>
          <span>жайылған ақдастарханымыздың</span>
          <span>қадірлі қонағыболуға шақырамыз!</span>
        </div>
      </div>
    </div>
  );
};

export default Second;
