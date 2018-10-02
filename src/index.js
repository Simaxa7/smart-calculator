class SmartCalculator {
  constructor(initialValue) {
  this.state = String(initialValue);
  }

  add(number) {
    this.state += " add " + number;
    return this;
  }
  
  subtract(number) {
    this.state += " subtract " + number;
    return this ;
  }

  multiply(number) {
    this.state += " multiply " + number;
    return this;
  }

  devide(number) {
    this.state += " devide " + number;
    return this;
  }

  pow(number) {
    this.state += " pow " + number;
    return this;
  }

  valueOf() {
    let myArrData = this.state.split(" ");
    let result = 0;
    let i = myArrData.length-1;
    let len = myArrData.length - 1;

    for (let i = len; i >= 0; i--) {
      
      if (myArrData[i] == "pow") {
        result = Math.pow(myArrData[i-1], myArrData[i+1]);
        myArrData.splice(i - 1, 3, result);
      }
    }

    len = myArrData.length - 1;
    for (let i = len; i >= 0; i--) {
      
      if (myArrData[i] == "multiply") {
        result = Number(myArrData[i-1]) * Number(myArrData[i+1]);
        myArrData.splice(i - 1, 3, result);
      }
    }

    len = myArrData.length - 1;
    for (let i = len; i >= 0; i--) {
      
      if (myArrData[i] == "devide") {
        result = myArrData[i-1] / myArrData[i+1];
        myArrData.splice(i - 1, 3, result);
        // console.log("+++++++", myArrData);
      }
    }

    len = myArrData.length - 1;
    while(myArrData[1] != undefined) {

      if (myArrData[1] == "add") {
        result = Number(myArrData[0]) + Number(myArrData[2]);
        myArrData.splice(0, 3, result);
      } else {
        result = Number(myArrData[0]) - Number(myArrData[2]);
        myArrData.splice(0, 3, result);
      }
    }

  return  result;
  }

}

module.exports = SmartCalculator;