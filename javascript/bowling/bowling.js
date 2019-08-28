function checkForErrors(rolls) {
    
}

export class Bowling {
    constructor() {

        this.rolls = new Array();
        this.frameStart = true;
        this.currentScore = 0;
        this.length = 20;

    }

    roll(pins) {

        if (pins < 0) {
            throw 'Negative roll is invalid'
        }
        if (pins > 10) {
            throw 'Pin count exceeds pins on the lane'
        }
        if (frameCount(this.rolls) == 10) {
            let bonusRoll1 = this.rolls[this.rolls.length - 2]
            let bonusRoll2 = this.rolls[this.rolls.length - 1]
            if (bonusRoll1 < 10 && bonusRoll1 + bonusRoll2 > 10) {
                throw 'Pin count exceeds pins on the lane'
            }
        }
        this.rolls.push(pins)
        //every time there is a roll it then goes into the array

        function frameCount(totalRolls) {
            let currentFrame = 0
            let startOfFrame = true
            for (let roll = 0; roll < totalRolls.length; roll++) {
                if (startOfFrame === true) {
                    currentFrame++
                    startOfFrame = false
                    if (totalRolls[roll] === 10) {
                        startOfFrame = true
                    }
                } else {
                    startOfFrame = true
                }
            }
            return currentFrame
        }
    }

    score() {


        const strike = 10
        const spare = 10

        for (let roll = 0; roll < this.length; roll++) {

            if (this.frameStart == true) {

                if (this.rolls[roll] == strike) {

                    this.currentScore += (strike + this.rolls[roll + 1] + this.rolls[roll + 2])
                    this.length--
                    //There is not going to be another one in that frame. It's only 1 ball to get the strike

                } else {

                    this.currentScore += this.rolls[roll]
                    this.frameStart = false
                }

            } else {

                // we are at the end of a frame, do we have a spare
                if (this.rolls[roll] + this.rolls[roll - 1] == spare) {
                    //current postition -1 so the previous ball
                    // spare so add this roll + next roll
                    // we don't add 10 because the first ball was already added at the frame start
                    this.currentScore += this.rolls[roll] + this.rolls[roll + 1]

                } else {

                    this.currentScore += this.rolls[roll]

                }

                this.frameStart = true;

            } // endif framesart

        } // end of for

        return this.currentScore
    }
}


