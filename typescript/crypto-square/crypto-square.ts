class Crypto {
  secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  normalizePlaintext = (): string =>
    this.secret.replace(/\W|_/gm, "").toLowerCase();

  size = (): number => {
    this.secret = this.normalizePlaintext();
    return Math.ceil(this.secret.length ** 0.5);
  };

  plaintextSegments = (): string[] => {
    const size = this.size();
    const segments = [];
    for (let i: number = 0; i < this.secret.length; i += size) {
      segments.push(this.secret.substring(i, i + size));
    }
    return segments;
  };

  ciphertext = (): string => {
    const segments: string[] = this.plaintextSegments();
    let cipher = "";
    for (let i: number = 0; i < segments[0].length; i++) {
      for (let segment of segments) {
        if (i >= segment.length) continue;
        cipher = cipher.concat(segment[i]);
      }
    }
    return cipher;
  };
}

export default Crypto;
