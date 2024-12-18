const express = require('express');
const app = express();
const path = require('path');

app.set("/", "html");
app.use(express.static(path.join(_dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (reg, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log("listening on http://localhost:8080");
});