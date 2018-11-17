function isLeapYear(year: number): boolean {
  return !(year % 400) || (year % 100 && !(year % 4)) ? true : false;
}

export default isLeapYear;
