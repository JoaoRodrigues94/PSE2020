const express = require('express');
const app = express();

const questions = require('./routes/routes');

app.use('/', questions);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`App is listening on port ${port}`)});