import express  from "express"
import { readFile } from 'fs'

const app = express()

//Middleware para arquivos (CSS, IMG, JS,etc)
app.use( express.static('public') )



app.get('/', (req,res) => {
  readFile('index.htm', 'utf-8', (err, data) => {
    res.send(data)
  })
})

app.get('/alunos', (req,res) => {

 res.send('Página dos alunos')
})

app.get('/alunos/:idAluno', (req,res) => {
    res.send(req.params.idAluno)
})

app.listen(3030, () => console.log('Running server'))