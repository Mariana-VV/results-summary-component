import { useEffect, useState } from "react";

import "./App.scss";

type Score = {
  category: string;
  score: number;
  icon: string;
};

function App() {
  const [scores, setScores] = useState<Score[] | []>([]);
  useEffect(() => {
    fetch("public/data.json").then((response) =>
      response.json().then((data) => setScores(data)),
    );
  }, []);

  let sum = 0;
  scores.forEach((s) => (sum += s.score));

  const colors = ["#FF5555", "#FFB21E", "#00BB8F", "#1125D6"];
  const bg = ["#FFF6F6", "#FFFBF4", "#F2FCF9", "#F3F4FD"];

  return (
    <section>
      <div className="wrapper">
        <div className="score">
          <p className="score__result">Your Result</p>
          <div className="score__score">
            <h1 className="score__title">
              {Math.round(sum / scores.length).toString()}
            </h1>
            <p className="score__of">of 100</p>
          </div>
          <h2 className="score__great">Great</h2>
          <p className="score__description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="content">
          <h3 className="content__title">Summary</h3>
          <ul className="content__list">
            {scores.map((score, i) => (
              <li
                className="content__item"
                style={{ backgroundColor: bg[i] }}
                key={i}
              >
                <p className="content__info" style={{ color: colors[i] }}>
                  <img src={score.icon} alt="" />
                  {score.category}
                </p>
                <p className="contant__score">
                  {score.score} <span className="content__span">/ 100</span>
                </p>
              </li>
            ))}
          </ul>
          <button className="content__btn">Continue</button>
        </div>
      </div>
    </section>
  );
}

export default App;
