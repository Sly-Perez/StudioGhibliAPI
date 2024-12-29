const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const helmet = require('helmet');

const PORT = process.env.PORT || 5001;

//connection to db
const connectToDB = require('./src/database/config/DBconnection');

//routes
const movieRouter = require('./src/routes/movieRoutes');
const webRouter = require('./src/routes/webRoutes');

//middlewares
const errorHandler = require('./src/middlewares/errorHandler');

connectToDB();
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public', 'assets')));
app.set('views', path.join(__dirname, 'public', 'views'));
app.set("view engine", "ejs");
app.use(webRouter);
app.use('/SGapi/movies', movieRouter);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
});