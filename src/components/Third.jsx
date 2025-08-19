import React from "react";

const Third = () => {
  return (
    <div
      className="section"
      style={{
        background: ' url("/image/2.jfif")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            color: "#333",
            fontFamily: "RosaMarena",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",

              color: "#FF1493",
              fontFamily: "MonAmour",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              fontWeight: "bold",
            }}
          >
            Той Иелері
          </h2>

          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <span style={{ marginBottom: "0.8rem", fontFamily: "MonAmour" }}>
              <span style={{ color: "#FF1493", fontWeight: "bold" }}>
                Ата-апасы:
              </span>{" "}
              <span style={{ color: "#4B0082", fontFamily: "monospace" }}>
                Баделғажы, Тәшімбек <br />
              </span>
            </span>
            <span>
              <span
                style={{
                  color: "#FF1493",
                  fontWeight: "bold",
                  fontFamily: "MonAmour",
                }}
              >
                Әке-шешесі:
              </span>{" "}
              <span style={{ color: "#4B0082", fontFamily: "monospace" }}>
                Ержанат, Амангүл
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            fontSize: "2rem",
            color: "#333",
            fontFamily: "RosaMarena",
            lineHeight: "1.5",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "#FF1493",
              fontFamily: "MonAmour",
              fontWeight: "bold",
            }}
          >
            Мекенжайы
          </h3>

          <p style={{ marginBottom: "0.8rem" }}>
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "MonAmour",
                color: "#4B0082",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              "Dayan Resort 2"
            </span>
            <br />
          </p>

          <p>
            <span style={{ color: "#4B0082", fontFamily: "monospace" }}>
              2025.01.30 күні
            </span>
            <br />
            <span
              style={{
                fontSize: "2rem",
                color: "#FF1493",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                fontFamily: "monospace",
              }}
            >
              12:00 <br />
              сағатта
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
