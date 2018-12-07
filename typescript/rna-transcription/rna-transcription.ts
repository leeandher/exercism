class Transcriptor {
  dnaString: string;

  toRna(dnaString: string): string {
    if (/[^G|C|T|A]/gm.test(dnaString)) throw Error("Invalid input DNA.");
    return dnaString
      .split("")
      .map(letter => {
        switch (letter) {
          case "G":
            return "C";
          case "C":
            return "G";
          case "T":
            return "A";
          case "A":
            return "U";
          default:
            return letter;
        }
      })
      .join("");
  }
}

export default Transcriptor;
