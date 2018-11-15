class HelloWorld {
  static hello(person?: String) {
    return `Hello, ${person || "World"}!`;
  }
}

export default HelloWorld;
