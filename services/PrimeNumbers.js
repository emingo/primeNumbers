
class PrimeNumbers {
    isPrime(num) {
        this.validateInt(num)
        if (!Number.isInteger(num)) {
            let error = new Error("bad input")
            error.status = 400
            throw error
        }
        if (num <= 3) return num > 1;
        let q = Math.floor(Math.sqrt(num))

        if (num % 2 === 0) return false

        for (let i = 3; i <= q; i += 2) {
            if (num % i === 0) return false
        }
        return true;
    }
    getPrimesUpTo(num) {
        this.validateInt(num)
        let primes = [];
        if(num >= 2) {
            primes.push(2);
            for (let i = 3; i <= num; i+=2) {
                if (this.isPrime(i, primes)) {
                    primes.push(i)
                }
            }
        }

        return primes
    }

    validateInt(num){
        if (Number.isInteger(num) || (typeof num == 'string' && Number.isInteger(Number(num)))  ) {
            return;
        }
        let error = new Error("bad input")
        error.status = 400
        throw error
    }
}

module.exports = new PrimeNumbers();
