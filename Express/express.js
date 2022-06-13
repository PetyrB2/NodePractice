// CONSTANTS Express server
const express = require('express');
// name express app
const app = express();
// set port value
const port = 4444




// Add fake "product" info to throw to browser or console..Stringify it and set content-type
app.get('/', (req, res) => {
    const product = { title: "The Office DVD", price: 25.99 };
    const json = JSON.stringify(product);
    res.setHeader('Content-Type', 'application/json');
    res.end(json);
});

// run app.listen on port and send to  Console log 
// "REST API application listening at http://localhost:${port"
app.listen(port, () => {
    console.log(`REST API application listening at http://localhost:${port}`)
});

