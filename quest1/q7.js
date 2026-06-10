const express = require('express');
const app = express();

app.get('/produtos/:nome', (req, res) => {
    
    let nome = req.params.nome;

    res.send(`produto ${nome}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);