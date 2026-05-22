// server.js - Express version
const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.type('text/html');
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.type('text/html');
    res.send("About us: at CADT, we love node.js!");
});

// Contact-us route
app.get('/contact-us', (req, res) => {
    res.type('text/html');
    res.send("You can reach us via email...");
});

// Products route
app.get('/products', (req, res) => {
    res.type('text/html');
    res.send("Buy one get one..");
});

// Projects route
app.get('/projects', (req, res) => {
    res.type('text/html');
    res.send("Here are our awesome projects");
});

// 404 handler for any other routes
app.use((req, res) => {
    res.status(404).type('text/plain');
    res.send('404 Not Found');
});

// Start the server
app.listen(3003, () => {
    console.log('Server is running at http://localhost:3003');
});