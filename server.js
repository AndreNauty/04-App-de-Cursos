import express from 'express'

const app = express()
const port = 8000

//Usar JSON
app.use(express.json());

import cursos from'./rotas/cursos.js'
app.use(cursos)

// Inicializa o servidor na porta 8000
app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})
