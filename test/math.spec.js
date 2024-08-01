// tests/math.spec.js

import { expect } from 'chai';
import { MathService } from '../services/math.js';

describe('MathService', function () {
    describe('#generateFibonacci', function () {
        it('should return the first 2 Fibonacci numbers', function () {
            const result = MathService.generateFibonacci(2);
            expect(result).to.deep.equal([0, 1]);
        });

        it('should return the first 10 Fibonacci numbers', function () {
            const result = MathService.generateFibonacci(10);
            expect(result).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });
    });
});
