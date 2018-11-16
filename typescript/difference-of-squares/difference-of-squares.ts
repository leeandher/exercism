class Squares {
  //Fields
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  //Constructor
  constructor(N: number) {
    this.squareOfSum = 0;
    this.sumOfSquares = 0;
    for (let i: number = 1; i <= N; i++) {
      this.squareOfSum += i;
      if (i === N) this.squareOfSum *= this.squareOfSum;
      this.sumOfSquares += i * i;
    }
    this.difference = Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}

export default Squares;
