const express = require('express');
const app = express();
app.use(express.json());

app.post('/sum', (req, res) => {
    const { num1, num2 } = req.body; 

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'enter two valid numbers' });
    }

    const sum = num1 + num2; 

    res.json({ result: sum }); 
});

module.exports = app;
