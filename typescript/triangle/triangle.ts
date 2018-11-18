export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    //Ensure input is a triangle
    if (this.sides.length !== 3) throw Error("Invalid triangle!");

    //Ensure all sides are > 0
    if (this.sides.some(side => side <= 0)) {
      throw Error("That doesn't make sense!");
    }

    //Ensure the Triangle Inequality is maintained
    const sortedSides = this.sides.sort((a, b) => a - b);
    if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
      throw Error("Breaking math!");
    }

    //Identify unique sizes
    const uniqueSides = new Set(this.sides).size;
    switch (uniqueSides) {
      case 1:
        return "equilateral";
      case 2:
        return "isosceles";
      case 3:
        return "scalene";
      default:
        return "not a triangle";
    }
  }
}
