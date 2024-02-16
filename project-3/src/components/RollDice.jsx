import { useState } from "react";
import styled from "styled-components";

const RollDice = ({currentDice,rollDice}) => {
    

    

console.log(currentDice);
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`}  />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 48px;

p{
    font-size:24px;
}
.dice{
    cursor: pointer;
}

`;
