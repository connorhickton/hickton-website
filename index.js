const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

// set the view engine to ejs
app.set('view engine', 'ejs');



app.get('/', async (request, response) => {
    
    //response.send( await readFile('./header.html', 'utf8') );
    response.send( await readFile('./home.html', 'utf8') );

});

app.get('/about', async (request, response) => {
    
    response.send( await readFile('./about.html', 'utf8') );

    

});
app.get('/home', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
