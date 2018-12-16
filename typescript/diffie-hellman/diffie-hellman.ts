class DiffieHellman {
  p: number;
  g: number;

  constructor(prime_p: number, prime_g: number) {
    // Check if the numbers are prime
    if (!this.isPrime(prime_p) || !this.isPrime(prime_g)) {
      throw new Error("The provided numbers are not prime!");
    }
    // Check if the numbers are within the bounds
    if (!this.isBounded(prime_p) || !this.isBounded(prime_g)) {
      throw new Error("The provided numbers are not within the bounds!");
    }

    this.p = prime_p;
    this.g = prime_g;
  }

  private isPrime(num: number): boolean {
    const upperLimit: number = Math.floor(num ** 0.5);
    for (let i: number = 2; i <= upperLimit; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private isBounded(num: number): boolean {
    const lowerBound: number = 0;
    const upperBound: number = 9999;
    // return num >=;
    return true;
  }

  public getPublicKeyFromPrivateKey(num: number): string {
    console.log(num);
    return "testing";
  }
}

export default DiffieHellman;
