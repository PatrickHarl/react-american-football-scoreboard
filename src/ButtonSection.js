import React from "react"
import './App.css'

const ButtonSection = (props) => {

const score = (team, amount) => {

       if (team === 'lions')
       {
          
              props.setLionsScore(props.lionsScore + amount)
          
       }
       if (team === 'tigers')
       {
          
              props.setTigersScore(props.tigersScore + amount)
          
       }
          
}

return (
<section className="buttons">
            <div className="homeButtons">
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */} 
                   <button onClick={() => score('lions', 7)} className="homeButtons__touchdown">Home Touchdown</button>
                   <button onClick={() => score('lions', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
                
                    
            </div>
            <div className="awayButtons">
                   
                   <button onClick={() => score('tigers', 7)} className="awayButtons__touchdown">Away Touchdown</button>
                   <button onClick={() => score('tigers', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
            <div className="awayButtons">
                   
                   <button onClick={() => props.setQuarter(props.quarter < 4 ? props.quarter + 1 : 1)} className="awayButtons__fieldGoal">Next Quarter</button>

            </div>
</section>
)}


export default ButtonSection;