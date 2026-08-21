import express from 'express'

const app = express()
const port = 8000

// Rota GET: Retorna a lista de cursos
app.get('/cursos',(req,res) => {
    res.send(["Banco de Dados", "Programação Back End", "Projeto de Software", "Linguagem de Marcação"])
})

// Inicializa o servidor na porta 8000
app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})