const express = require('express');
const app = express();

app.get('/inicio', (req, res) => {
  res.redirect('/');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);