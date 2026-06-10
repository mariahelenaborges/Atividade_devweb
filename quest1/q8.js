const express = require('express');
const app = express();

app.get('/filmes/:id/:nome', (req, res) => {
    
    let nome = req.params.nome;
    let id = req.params.id;

    res.send(`filme ${nome} (ID do filme ${id})`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);