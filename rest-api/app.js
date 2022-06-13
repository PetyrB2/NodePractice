// ############# A REST-API APP TUTORIAL #####################

// CONSTANTS
// For the Express HTTP Server Framework on Port XXXX
const express = require('express')
const app = express()
const port = 8080

//Constants for the fake product
const product = { title: "The Office DVD", price: 25.99 };
const json = JSON.stringify(product);



// Add URL handler
app.get('/', (req, res) => {
    const product = { title: "The Office DVD", price: 25.99 };
    const json = JSON.stringify(product);
    res.setHeader('Content-Type', 'application/json');
    res.end(json);
});

// Add HTTP listener
app.listen(port, () => {
    console.log(`REST API application listening at http://localhost:${port}`)
});