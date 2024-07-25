const MathService = require('../services/math');

const MathController = {
    getFibonacci: (req, res) => {
        // read the parameter from the request URL
        // and validate it
        const n = req.params.n;
        if (isNaN(n) || n < 1) {
            return res.status(400).json({ error: 'Invalid number' });
        }

        // generate the Fibonacci sequence
        // and return it
        const sequence = MathService.generateFibonacci(n);
        res.json({
           sequence: sequence,
        });
    }
};

module.exports = MathController;
