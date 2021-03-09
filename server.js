const express = require('express');
const exphbs = require("express-handlebars");
const routes = require('./controllers/borger_controller');
const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log(`SERVER LIVE : http://localhost:${PORT}`)
})