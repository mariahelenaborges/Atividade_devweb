const express = require('express');
const app = express();

app.get('/usuarios/:id', (req, res) => {
    
    let id = req.params.id;

    res.send(`Usuário ${id}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);