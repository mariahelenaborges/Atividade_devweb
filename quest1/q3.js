const express = require('express');
const app = express();

app.get("/contato", (req, res) => {
    res.json({
        email: "contato@email.com",
        telefone: "(81) 99999-9999"
    });
});
app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);