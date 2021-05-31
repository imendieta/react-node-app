require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//TODO: require hbs
app.set('view engine', 'hbs');


// Servir contenido estatico
app.use(express.static('public'));


// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Inaki',
//         titulo: 'Hola'
//     });
// });

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

// app.get('/generic', (res, req) => {
//     req.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (res, req) => {
//     req.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, () => {
    console.log('Application running in ' + port);
});