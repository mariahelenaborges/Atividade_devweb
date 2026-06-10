const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('Bem-vindo à parte "sobre" do sistema');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);