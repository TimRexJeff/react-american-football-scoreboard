//DONE: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //DONE: STEP 2 - Establish your applictaion's state with some useState hooks.
  // You'll need one for the home score and another for the away score.

  const [lionsScore, adjLionsScore] = useState(0);
  const [tigersScore, adjTigersScore] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* DONE STEP 3 - Change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* DONE STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => adjLionsScore(lionsScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => adjLionsScore(lionsScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => adjTigersScore(tigersScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => adjTigersScore(tigersScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
