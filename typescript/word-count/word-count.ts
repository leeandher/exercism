class Words {
  count(str: string) {
    const wordMap = new Map();
    str
      .trim()
      .split(/\s+/gm)
      .forEach(str => {
        const word = str.toLowerCase();
        wordMap.set(word, wordMap.has(word) ? wordMap.get(word) + 1 : 1);
      });
    return wordMap;
  }
}

export default Words;
