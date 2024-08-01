export const MathService = {
  generateFibonacci: (n) => {
      // generate the Fibonacci sequence from 0 to n
      // and then return it
      const fib = [0, 1];

      for (let i = 2; i < n; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
      }

      return fib.slice(0, n);
  }
};
