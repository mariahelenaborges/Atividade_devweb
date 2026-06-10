const express = require('express');
const app = express();

app.get("/erro", (req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);