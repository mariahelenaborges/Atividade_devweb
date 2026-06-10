const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/filmes2", (req, res) => {

    let filmes = [
        {
            nome: "Avatar",
            ano: 2009
        },
        {
            nome: "Titanic",
            ano: 1997
        },
        {
            nome: "Vingadores",
            ano: 2012
        }
    ];

    res.render("filmes2", {
        filmes
    });

});
app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);