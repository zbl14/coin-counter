export class Counter {
  constructor(money) {
    this.money = money;
    this.quarters = 0;
    this.dimes = 0;
    this.nickles = 0;
    this.pennies = 0;
  }

  makeChange(){
    if (isNaN(this.money) || this.money < 0){
      return false;
    }
    if(this.money >= 0.25){
      const quarters = Math.trunc(this.money / .25);
      this.quarters = quarters;
      this.money -= this.quarters * .25;
      return this.makeChange();
    } else if(this.money >= .1) {
      const dimes = Math.trunc(this.money / .1);
      this.dimes= dimes;
      this.money -= this.dimes * .1;
      return this.makeChange();
    } else if(this.money >= .05) {
      const nickles = Math.trunc(this.money / .05);
      this.nickles = nickles;
      this.money -= this.nickles * .05;
      return this.makeChange();
    } else if( this.money >= .01) {
      const pennies = Math.trunc(this.money / .01);
      this.pennies = pennies;
      this.money -= this.pennies * .01;
      return this.makeChange();
    }
  }


  // function welcome(salutation) {
  //   return function(yourName) {
  //     return `${salutation}! Nice to meet you, ${yourName}!`
  //   }
  // }
  
  makeChangeClosure(changeType){
    return function(amount)
    {
      if(changeType.toUpperCase() == "QUARTERS") {
        const quarters = Math.trunc(amount / .25)
        return `${quarters} ${changeType} and ${Math.round((amount - (quarters * .25)) * 100)} cents.`;
      } else if (changeType.toUpperCase() == "DIMES") {
        const dimes = Math.trunc(amount / .1);
        return `${dimes} ${changeType} and ${Math.round((amount - (dimes * .10)) * 100)} cents.`;
      } else if (changeType.toUpperCase() == "NICKLES") {
        const nickles = Math.trunc(amount / .05);
        return `${nickles} ${changeType} and ${Math.round((amount - (nickles * .05)) * 100)} cents.`;
      } else if (changeType.toUpperCase() == "PENNIES") {
        const pennies = Math.trunc(amount / .01);
        return `${pennies} ${changeType}.`;
      }
    }
  }
}

// const getQuarters = makeChangeClosure("Quarters");
// const getDimes = makeChangeClosure("Dimes");

// getQuarters(4.99)
// expected output = 19

// getDimes(4.99)
// expected output = 49