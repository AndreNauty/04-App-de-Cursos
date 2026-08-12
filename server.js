import express from 'express'

const app = express()
const port =8000

//Rota GET: Retorna a lista de cursos
app.get('/cursos',(req,res)=>{
    res.send(["Banco de Dados","Programação Back End","Projeto de Software","Linguagem de Marcação"])
})

//Rota POST: Cria um novo curso
app.post('/cursos',(req,res)=>{
    res.send(["Curso cadastrado"])
})

//Rota PUT: Atualiza um curso
app.put('/cursos/:id',(req,res)=>{
    res.send([`Curso com ID ${req.params.id} atualizado`])
})

//Rota DELETE: Deleta um curso especifico usando o parâmetro ID
app.delete('/cursos/:id',(req,res)=>{
    res.send([`Curso com ID ${req.params.id} deletado`])
})


//Inicializa o servidor na porta 8000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})