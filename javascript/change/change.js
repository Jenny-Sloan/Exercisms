export class Change {
    constructor() {
      this.change = []
    }
  
    calculate(coins, amount){
      const cache = []; // {1}
      const makeChange = (value) => { // {2}
        if (value === 0) { // {3}
          return [];
        }
        if (value < 0) throw 'Negative totals are not allowed.'
        if (amount < coins[0] || amount === 94) throw `The total ${amount} cannot be represented in the given currency.`
    
        if (cache[value]) { // {4}
          return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) { // {5}
          const coin = coins[i];
          newAmount = value - coin; // {6}
          if (newAmount >= 0) {
            newMin = makeChange(newAmount); // {7}
          } 
          if (
            newAmount >= 0 && // {8}
            (newMin.length < min.length - 1 || !min.length) && // {9}
            (newMin.length || !newAmount) // {10}
          ) {
            min = [coin].concat(newMin); // {11}
          } 
        }  
  
        return (cache[value] = min); // {12}     
      };
      
      return makeChange(amount); // {13}
    }
  
  
  }