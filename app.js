const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

let ejs = require('ejs');

app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}::${PORT}`)
})




// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);