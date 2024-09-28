const express = require('express');
const app = express();
const port = 3000;
const products = require('./data/products.json');

app.use(express.static('public'));

app.get('/products', (req, res) => {
	res.json(products);
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
