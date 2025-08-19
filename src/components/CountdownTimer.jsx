import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-08-30T12:00:00");
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "күн", value: timeLeft.days },
    { label: "сағат", value: timeLeft.hours },
    { label: "минут", value: timeLeft.minutes },
    { label: "секунд", value: timeLeft.seconds },
  ];

  return (
    <div
      className="countdown-container animate-scaleIn"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",

        background: ' url("/image/2.jfif")',
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <h2
        className="animate-fadeIn delay-1"
        style={{
          fontSize: "2rem",
          color: "#FF1493",
          fontFamily: "MonAmour",
          marginBottom: "2rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Тойға дейін қалған уақыт
      </h2>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {timeBlocks.map((block, index) => (
          <div
            key={block.label}
            className={"time-block animate-fadeIn delay-" + (index + 2)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "linear-gradient(135deg, #FFB6C1, #87CEEB)",
              borderRadius: "15px",
              padding: "1rem",
              minWidth: "120px",
              transform: "rotate(-3deg)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(3deg) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(-3deg)";
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#4B0082",
                fontFamily: "MonAmour",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {String(block.value).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                color: "#4B0082",
                fontFamily: "RosaMarena",
                marginTop: "0.5rem",
              }}
            >
              {block.label}
            </span>
          </div>
        ))}
      </div>
      <div
        className="animate-fadeIn delay-4"
        style={{
          marginTop: "2rem",
          fontSize: "1.8rem",
          color: "#6A5ACD",
          fontFamily: "monospace",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        <p
          style={{
            fontSize: "1.3rem",
            marginTop: "0.5rem",
            fontFamily: "monospace",
          }}
        >
          2025.08.30 күні,
          <br /> сағат 12:00-де
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
