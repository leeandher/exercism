class Bob {
  public hey(statement: string): string {
    if (this.isBlank(statement)) return "Fine. Be that way!";
    if (this.isAngry(statement)) return "Whoa, chill out!";
    if (this.isQuestion(statement)) return "Sure.";
    return "Whatever.";
  }

  private isBlank(statement: string): boolean {
    // Check if statement is unchanged after stripping all non-whitespace
    return statement === statement.replace(/[^\s]/gm, "");
  }

  private isAngry(statement: string): boolean {
    // Check if capital letters are present
    const justCaps = statement.replace(/[^A-ZÀ-Ý]/gm, "");
    if (justCaps.length === 0) return false;

    // Check if the statement is unchanged without capital letters
    const justText = statement.replace(/[^a-zA-ZÀ-Ýà-ÿ]/gm, "");
    return justCaps === justText;
  }

  private isQuestion(statement: string): boolean {
    // Check if the statement ends with a question mark
    return /\?$/gm.test(statement);
  }
}

export default Bob;
