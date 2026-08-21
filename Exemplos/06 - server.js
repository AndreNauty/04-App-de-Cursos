import express from 'express'

const app = express()
const port = 8000

//Usar JSON
app.use(express.json());

// Rota GET: Retorna a lista de cursos
app.get('/cursos',(req,res) => {
		const query = req.query
		console.log(query)
    res.send(["Banco de Dados", "Programação Back End", "Projeto de Software", "Linguagem de Marcação"])
});

// Rota POST: Cria um novo curso
app.post('/cursos',(req,res) => {
		const body = req.body;
		console.log(body)
    res.send("Curso Novo - Marketing cadastrado")
});

// Rota PUT: Atualiza um curso
app.put('/cursos/:id',(req,res) => {
		const id = req.params
		console.log(id)
    res.send(`Curso com ID ${req.params.id} atualizado.`)
});

// Rota DELETE: Deleta um curso específico usando um parâmetro (ID)
app.delete('/cursos/:id', (req, res) => {
  res.send(`Curso com ID ${req.params.id} deletado.`);
});

// Inicializa o servidor na porta 8000
app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})
