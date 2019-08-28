export class Bowling {
    constructor() {
      this.rolls = new Array();
      this.frameStart = true;
      this.currentScore = 0;
      this.length = 20;
    }
  
    roll(pins) {
      this.rolls.push(pins)
  
      if (pins < 0) throw 'Negative roll is invalid';
      if ((pins > 10) || (this.rolls[0] !== 10 && this.rolls[0] + this.rolls[1] > 10) || (this.rolls[18]===10 && this.rolls[19]<10 && this.rolls[20] === 10)) throw 'Pin count exceeds pins on the lane';
      if ((this.rolls.length > 21) || (this.rolls[18] === 0 && this.rolls[19] === 0 && this.rolls[20] === 0)) throw 'Cannot roll after game is over';
      if (this.rolls[18] === 10 && this.rolls[19] !== 10 && this.rolls[20] > 10 - this.rolls[19]) throw 'Pin count exceeds pins on the lane';
    }
  
    score() {
      const strike = 10;
      const spare = 10;
  
      for (let roll = 0; roll < this.length; roll++) {
  
        if (this.frameStart == true) {
          if (this.rolls[roll] == strike) {
            this.currentScore += (strike + this.rolls[roll + 1] + this.rolls[roll + 2])
            this.length--
  
          } else {
            this.currentScore += this.rolls[roll]
            this.frameStart = false
          }
  
        } else {
          // if (this.rolls[roll] + this.rolls[roll-1] > 10) throw 'Pin count exceeds pins on the lane';
  
          if (this.rolls[roll] + this.rolls[roll - 1] == spare) {
            this.currentScore += this.rolls[roll] + this.rolls[roll + 1]
  
          } else {
            this.currentScore += this.rolls[roll]
          }
          this.frameStart = true;
        }
        if ((this.rolls.length < 10) || ((this.rolls[18] + this.rolls[19] >= 10 && this.rolls.length < 21) || this.rolls[18] === 10 && this.rolls.length < 20)) throw 'Score cannot be taken until the end of the game';
      }
      return this.currentScore;
    }
  }