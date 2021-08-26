const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
         return response.send('Hello world');     
}); 

app.listen(3333);
