const express = require('express');
const MathController = require('./controllers/math');

// initialize th Express server
const app = express();

// register the Fibonacci API route
app.get('/api/v1/fibonacci/:n', MathController.getFibonacci);

// start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
