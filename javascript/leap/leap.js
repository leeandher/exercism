// Determine if an input year is a leap year or not
export const isLeap = year => !(year % 400) || (year % 100 && !(year % 4));
