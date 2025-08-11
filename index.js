const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello from Node API server!');
});

app.listen(port, () => {
	console.log(`App listening on port: ${port}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/libtickit')
	.then(() => console.log('Connected to database'));