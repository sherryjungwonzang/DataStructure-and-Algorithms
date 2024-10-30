//1175. Prime Arrangements
//return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
//(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
//since the answer may be large, return the answer modulo 10^9 + 7
var primeArrangements = (n) => {
    let mod = 10 ** 9 + 7;
    let primes = 0;
    let nonPrimes = 0;
    let res = 1;

    for (let i = 1; i <= n; i++) {
        //prime number
        res *= isPrime(i) ? ++primes : ++nonPrimes;

        //updating
        res = res % mod;
    }

    //checking prime number
    function isPrime(n) {
        let num = Math.sqrt(n);

        for (let i = 2; i <= num; i++) {
            if (n % i === 0) return false;
        }

        return n > 1;
    };

    return res;
}
primeArrangements(5); //12
//res = 1
//primes = 0
//nonPrimes = 0

//i = 1 -> isPrime(1): non prime number
//nonPrimes = 0 -> 1
//res = 1 -> 1 * 1 = 1
//primes = 0

//i = 2 -> isPrime(2): prime number
//primes = 0 -> 1
//nonPrimes = 0 -> 1
//res = 1 -> 1 * 1 = 1 -> 1 * 1 = 1

//i = 3 -> isPrime(3): prime number
//primes = 0 -> 1 -> 2
//nonPrimes = 0 -> 1
//res = 1 -> 1 * 1 = 1 -> 1 * 1 = 1 -> 1 * 2 = 2

//i = 4 -> isPrime(4): non prime number
//primes = 0 -> 1 -> 2
//nonPrimes = 0 -> 1 -> 2
//res = 1 -> 1 * 1 = 1 -> 1 * 1 = 1 -> 1 * 2 = 2 -> 2 * 2 = 4

//i = 5 -> isPrime(5): non prime number
//primes = 0 -> 1 -> 2 -> 3
//nonPrimes = 0 -> 1 -> 2
//res = 1 -> 1 * 1 = 1 -> 1 * 1 = 1 -> 1 * 2 = 2 -> 2 * 2 = 4 -> 4 * 3 = 12

primeArrangements(100); //682289015
