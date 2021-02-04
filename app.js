const express = require('express');
const ExpressError = require('./expressError');
const { mean, frequency, mode, median, stringArrToNum } = require('./statistics')
const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query nums with values set to comma-separated numbers", 400)
    }
});

app.get('/mean', (req, res, next) => {

});

app.get('/mean', (req, res, next) => {

});


app.use((req, res, next) => {
    const e = new ExpressError("Page not Found", 404)
    return next(e);
})

app.use((error, req, res, next) => {
    // the default status is 500 Internal Server Error 
    let status = error.status || 500;
    let message = error.message;

    return res.status(status).json({ error: { message, status } });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});