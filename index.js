const express = require('express')
const app = express()

const port = process.env. PORT || 3000

//Será chamado para todas as requisições
//Proverá os arquivos estáticos da aplicação
app.use(express.static('.'))
//Fara o parser do JSON para o tipo de dado passado
app.use(express.json()) 
app.use(express.urlencoded({
    extended: true
}))

app.get('/teste', (req, res) => {
    res.send("Olá, Fábrica de Sinapses")
})

app.listen(port, () => {
    console.info(`Aplicação rodando em http://localhost:${port}`)
})

