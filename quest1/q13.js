const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/perfil", (req, res) => {

    res.render("perfil", {
        nome: "Ian",
        idade: 17
    });

});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);