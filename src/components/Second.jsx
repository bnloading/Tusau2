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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="content"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          className: "animate-fadeIn",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "4vw",
            color: "#4B0082",
            fontFamily: "MonAmour",
            lineHeight: "1.8",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <span>Қуаныштың таңы арайланып атты кеп,</span>
          <span>Ақтарылсын жүректерден ақ тілек.</span>
          <span>Балаларымыздың тұсаукесер, 1 жасы,</span>
          <span>Тәй-тәй басқан қадамына бақ тілеп.</span>

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
              Ясин,
            </span>
            <span style={{ margin: "0 10px" }}></span>
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
          <span>1 жас тұсаукесер тойына</span>
          <span>жайылған ақ дастарханымыздың</span>
          <span>қадірлі қонағы болуға шақырамыз!</span>
        </div>
      </div>
    </div>
  );
};

export default Second;
