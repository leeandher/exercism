class CollatzConjecture {
  static steps(init: number): number {
    //Ensure positive integers
    if (init <= 0) throw Error("Only positive numbers are allowed");

    //Intialize step and counter
    let stepCount = 0;
    let nextStep = init;

    //Loop and count
    while (nextStep !== 1) {
      nextStep = nextStep % 2 ? 3 * nextStep + 1 : Math.floor(nextStep / 2);
      stepCount += 1;
    }

    //Return the count
    return stepCount;
  }
}

export default CollatzConjecture;
