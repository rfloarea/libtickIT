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

const ticketSchema = new mongoose.Schema({
	name: String,
	email: String,
	body: String,
},
{
	timestamps:true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

const testTicket = new Ticket({
	name: 'rowen floarea',
	email: 'rowen.floarea@proton.me',
	body: 'This is a test ticket.'
});

console.log(testTicket)