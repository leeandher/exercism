function isLeapYear(year: number) {
  return !(year % 400) || (!(year % 4) && year % 100) ? true : false;
}

export default isLeapYear;
