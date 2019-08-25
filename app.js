const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');
const errorController = require('./controllers/error')


app.set('view engine', 'ejs');
app.set('views', 'view');

//intial parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(adminRoutes.routes);
app.use(userRoutes);

app.use(errorController.get404Page);


//create server and listen to requests
app.listen(4000);