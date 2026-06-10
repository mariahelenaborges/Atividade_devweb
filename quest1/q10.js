const express = require('express');
const app = express();

app.get("/produtos", (req, res) => {

    let categoria = req.query.categoria;
    let pagina = req.query.pagina;

    res.send(`Buscando por: ${categoria}, página: ${pagina}`);
});
app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);