const express = require('express');
const url = require('url')
const app = express();
const PORT = 3000;

function capitalizaFirstLetter(texto){
    if(!texto) return ""
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function importController(controlador){
    return require(`./controlers/${controlador}`)
}

app.use((req, res, next) => {
    const parteUrl = new url.split('/').filter(part => part !== ''); 
    const controladorNome = parteUrl[0];
    const constrolador = importController(`${capitalizaFirstLetter(controladorNome)}`);
    next();
});

app.get('/produtos',(req, res) => {
    res.send('<h1>Produtos</h1>');
});

app.get('/servicos', (req, res) => {
    res.send('<h1>Serviços</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta http://localhost:${PORT}`);
});