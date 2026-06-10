const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/teste", (req, res) => {

    res.render("teste", {
        logado: true,
        admin: false
    });

});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);