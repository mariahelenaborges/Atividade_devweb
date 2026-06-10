const express = require('express');
const app = express();

app.get("/buscar", (req, res) => {

    let nome = req.query.nome;

    res.send(`Buscando por: ${nome}`);
});
app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);