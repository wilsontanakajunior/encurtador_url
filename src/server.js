const express = require('express');

const app = express();
const path = require('path');
const routes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

(async () => {
    const database = require('../src/db/db');
    const Url = require('../src/model/UrlModel');
    try {
        const resultado = await database.sync();

    } catch (error) {
        console.log(error);
    }

})();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(routes);

console.log(__dirname + '/views');
app.listen(3000, () => console.log('server is running'));