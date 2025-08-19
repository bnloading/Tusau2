import React, { useState, useRef } from "react";

const First = () => {
  const text = "✦ ТҰСАУ КЕСЕР ✦ ТҰСАУ КЕСЕР ✦ ";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="section"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(255,222,233,0), rgba(181,255,252,0)), url("/image/1.jfif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Жоғары сол жақта */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          backgroundImage: 'url("/image/1.png")',
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          top: "40px",
          left: "0px",
          zIndex: 1,
        }}
      />

      {/* Төмен оң жақта */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          backgroundImage: 'url("/image/2.png")',
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          bottom: "20px",
          right: "0px",
          zIndex: 1,
        }}
      />

      {/* Мәтін бөлігі */}
      <div
        className="section-content"
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "16px",
          maxWidth: "300px"
        }}
      >
        <h1
          style={{
            fontSize: "15vw",
            marginBottom: "1rem",
            color: "#FF6F91",
            fontFamily: "MonAmour",
            letterSpacing: "2px",
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(255,255,255,0.6)",
          }}
        >
          Тұсаукесер
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "10vw",
              color: "#6A5ACD",
              fontFamily: "MonAmour",
              letterSpacing: "2px",
              fontWeight: "normal",
              textShadow: "1px 1px 6px rgba(255,255,255,0.5)",
            }}
          >
            Ясин,
          </span>

          <span
            style={{
              fontSize: "10vw",
              color: "#FF69B4",
              fontFamily: "MonAmour",
              letterSpacing: "2px",
              fontWeight: "normal",
              textShadow: "1px 1px 6px rgba(255,255,255,0.5)",
            }}
          >
            Жасмин
          </span>
        </div>

        {/* 🎵 Music Player */}
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "30px",
            width: "90px",
            height: "90px",
            cursor: "pointer",
          }}
          onClick={togglePlay}
        >
          {/* айналатын мәтін + орталық батырма */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              animation: "spin 30s linear infinite",
            }}
          >
            {/* Шеңбердегі әріптер */}
            {text.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${
                    i * (360 / text.length)
                  }deg) translateY(-40px)`,
                  transformOrigin: "0 0",
                  fontSize: "10px",
                  fontFamily: "RosaMarena",
                  color: "#333",
                }}
              >
                {char}
              </span>
            ))}

            {/* ортасындағы батырма */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "55px",
                height: "55px",
                background: isPlaying ? "#ff6b6b" : "#4cd964",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 8px rgba(0,0,0,0.3)",
              }}
            >
              {isPlaying ? (
                <span style={{ color: "white", fontSize: "26px" }}>❚❚</span>
              ) : (
                <span style={{ color: "white", fontSize: "26px" }}>▶</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/audio/tusau.mp3"
        style={{ display: "none" }}
        loop
      />
    </div>
  );
};

export default First;
