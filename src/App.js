//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import ButtonSection from "./ButtonSection";
import AwayTeam from "./AwayTeam"
import HomeTeam from "./HomeTeam"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0)
  const [tigersScore, setTigersScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [tensMinuteTimer, setTensMinuteTimer] = useState(1)
  const [minuteTimer, setMinuteTimer] = useState(5)
  const [tensSecondTimer, setTensSecondTimer] = useState(0)
  const [secondTimer, setSecondTimer] = useState(0)
  
  const updateTimer = () => {

    if (secondTimer > 0 && secondTimer < 10)
    {

      setSecondTimer(secondTimer - 1)

    }
    else if (secondTimer <= 0)
    {
      if (tensMinuteTimer === 0 && minuteTimer === 0 && tensSecondTimer === 0 && secondTimer === 0)
      {

        return;

      }
      setSecondTimer(9)

      if (tensSecondTimer <= 5 && tensSecondTimer > 0)
      {

        setTensSecondTimer(tensSecondTimer - 1)

      }
      else if (tensSecondTimer <= 0)
      {

        setTensSecondTimer(5)

          if (minuteTimer <= 9 && minuteTimer > 0)
        {

          setMinuteTimer(minuteTimer - 1)

        }
        else if (minuteTimer <= 0)
        {

          setMinuteTimer(9)

          if (tensMinuteTimer <= 5 && tensMinuteTimer > 0)
          {
    
            setTensMinuteTimer(tensMinuteTimer - 1)
    
          }
          else if (tensMinuteTimer <= 0)
          {
    
            setTensMinuteTimer(0)
    
          }

        }

      }
      

    }

  }

  setTimeout(updateTimer, 1000)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeTeam lionsScore={lionsScore} />
  <div className="timer">{tensMinuteTimer}{minuteTimer}:{tensSecondTimer}{secondTimer}</div>
          <AwayTeam tigersScore={tigersScore} />
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <ButtonSection setLionsScore={setLionsScore} lionsScore={lionsScore} setTigersScore={setTigersScore} tigersScore={tigersScore} quarter={quarter} setQuarter={setQuarter}/>
    </div>
  );
}

export default App;
