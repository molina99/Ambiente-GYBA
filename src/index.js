const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
require('./database/database');

const app = express();

// Settings
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: '',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/roles'));
app.use(require('./routes/cuentasUser'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});