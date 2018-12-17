class DiffieHellman {
  p: number;
  g: number;

  constructor(prime_p: number, root_g: number) {
    // Check if the numbers are prime
    if (!this.isPrime(prime_p) || !this.isPrime(root_g)) {
      throw new Error("The provided numbers are not prime!");
    }

    // Check if the numbers are within the bounds
    if (prime_p < 1 || root_g < 1) {
      throw new Error("The provided numbers are not within the bounds!");
    }

    this.p = prime_p;
    this.g = root_g;
  }

  private isPrime(num: number): boolean {
    const upperLimit: number = Math.floor(num ** 0.5);
    for (let i: number = 2; i <= upperLimit; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private ensureValidPrivateKey(key: number): void {
    if (key <= 1 || key >= this.p) throw Error("Invalid private key.");
  }

  public getPublicKeyFromPrivateKey(key: number): number {
    this.ensureValidPrivateKey(key);
    return this.g ** key % this.p;
  }

  public getSharedSecret(privKey: number, pubKey: number): number {
    this.ensureValidPrivateKey(privKey);
    return pubKey ** privKey % this.p;
  }
}

export default DiffieHellman;
