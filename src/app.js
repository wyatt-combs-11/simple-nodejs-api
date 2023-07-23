const express = require('express');

const app = express();
const PORT = 4040;

const cors = require('cors')

app.use(cors())

app.get('/', (req, res, next)=>{
	res.status(200);
	res.send("You have successfully hit the endpoint");
});

app.get('/getData', (req, res)=>{
	res.status(200);
	res.setHeader('Content-Type', 'application/json')
	const sample = require('./intern_project_data.json')
	
	res.json(
		sample
	);
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
