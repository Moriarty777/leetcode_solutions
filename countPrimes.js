/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0; // No primes less than 2

  let isPrime = new Array(n).fill(true); // Assume all numbers are prime
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      // Mark all multiples of i as not prime
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Count the number of primes
  return isPrime.filter((val) => val).length;
};
