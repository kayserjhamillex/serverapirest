const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port',process.env.PORT || 3000);

//midderswares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/userroutes')(app);








app.listen(app.get('port'),()=>{
    console.log('server om port 3000');
});