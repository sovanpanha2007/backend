const { error } = require('console');
const express = require('express')
const fs = require('fs')

const filePath = './submissions.txt'

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Welcome to the Home Page');
});

app.get('/contact', (req, res) => {
    res.type('text/html');
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact', (req,res) => {
    const data = req.body.name;
    fs.appendFile(filePath, data +'\n', (error) => {
        if(error){
            console.log(error.message);
        }
    })
    console.log(data)
    res.type('text/plain');
    res.send('Done')
})

app.listen(3003, () => {
    console.log('Server is running at http://localhost:3003');
});