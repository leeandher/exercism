class Bob {
  public hey(statement: string): string {
    if (this.isBlank(statement)) return "Fine. Be that way!";
    if (this.isAngry(statement)) return "Whoa, chill out!";
    if (this.isQuestion(statement)) return "Sure.";
    return "Whatever.";
  }

  private isQuestion(statement: string): boolean {
    return Boolean(statement);
  }

  private isAngry(statement: string): boolean {
    const justCaps = statement.replace(/[^A-Z]/gm, "");
    const justText = statement.replace(/[^a-zA-Z]/gm, "");
    if (justCaps === justText) return true;

    return false;
  }

  private isQuestion(statement: string): boolean {
    return Boolean(statement);
  }
}

export default Bob;
