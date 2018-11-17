class SimpleCipher {
  //Fields
  key: string;

  //Constructor
  constructor(key: string = "") {
    //Initalize the key
    this.key = key;

    //Create the key if not provided
    const keyBase = "abcdefghijklmnopqrstuvwxyz";
    if (!key.length) {
      for (let i = 0; i <= 100; i++) {
        this.key += keyBase[Math.floor(Math.random() * keyBase.length)];
      }
    }
  }

  //Functions
  shift(text: string, encode: boolean) {
    let shifted = "";
    for (let i = 0; i < text.length; i++) {
      //Initialize the shift paramters
      const keyShift = this.key.charCodeAt(i) - 97;
      let shiftedCharCode: number;

      //Determine the shift direction (encoding or decoding)
      if (encode) {
        shiftedCharCode = text.charCodeAt(i) + keyShift;
        if (shiftedCharCode > 122) shiftedCharCode -= 26;
      } else {
        shiftedCharCode = text.charCodeAt(i) - keyShift;
        if (shiftedCharCode < 97) shiftedCharCode += 26;
      }
      shifted += String.fromCharCode(shiftedCharCode);
    }
    return shifted;
  }

  encode(text: string) {
    return this.shift(text, true);
  }

  decode(text: string) {
    return this.shift(text, false);
  }
}

export default SimpleCipher;
