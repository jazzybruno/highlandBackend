const express = require('express');
const { connection } = require('./utils/mongodb');
const PORT = process.env.PORT || 3000
const app = express();
const Middlewares = require('./utils/middlewares');
require('dotenv').config()
const cors = require('cors');
const helmet = require('helmet')
const compression = require('compression')


//the cors aprt start
app.use(cors())
//the cors aprt end

// the hosting part start 
app.use(compression())
app.use(helmet())
// the hosting part end

//the middlewares start
Middlewares(app)
//the middlewares end



//The database connection start
connection()
//The database connection end




app.listen(PORT , ()=> {
    console.log(`The server is running on port ${PORT}`);
} )


