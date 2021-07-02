const express = require('express');
const path = require('path');
const app = express();

//Routes
// app.use('/', require('./routes/routes')); Esto no sirve XD

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(3000, () => {
    console.log(`Server on port: 3000`)
})