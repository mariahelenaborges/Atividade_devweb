const express = require('express');
const app = express();

app.get("/usuarios", (req, res) => {

    let idade = req.query.idade;

    res.send(`Filtrando usuários com idade ${idade}`);
});
app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);