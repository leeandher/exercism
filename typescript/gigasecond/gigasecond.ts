class Gigasecond {
  //Fields
  startDate: Date;

  //Constructor
  constructor(start: Date) {
    this.startDate = start;
  }

  //Functions
  date() {
    return new Date(this.startDate.getTime() + Math.pow(10, 12));
  }
}

export default Gigasecond;
