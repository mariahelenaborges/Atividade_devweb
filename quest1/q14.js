const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/filmes", (req, res) => {

    let filmes = [
        "Avatar",
        "Titanic",
        "Vingadores"
    ];

    res.render("filmes", {
        filmes
    });

});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);