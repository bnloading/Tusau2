import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <>
      <div className="landscape-warning">
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "RosaMarena",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Бұл сайт мобильді құрылғыларға арналған.
          <br />
          Өтініш, телефон немесе планшет қолданыңыз.
        </h2>
      </div>
      <First />
      <Second />
      <Third />
      <CountdownTimer />
    </>
  );
}

export default App;
