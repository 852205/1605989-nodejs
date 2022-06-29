import express from 'express'
import { readFile } from 'fs'

const app = express()

//Middleware para arquivos estaticos (css,img,js, etc)
//passamos o nome do diretorio q sera publico
app.use( express.static('public') )

app.get('/', (req,res) => {
    readFile('index.html', 'utf-8', (err, data) => {
        res.send(data)
    })
  })



app.get('/alunos', (req, res) => res.send('Pagina dos alunos') )

app.get('/alunos/:id', (req, res) => {
    res.send(req.params)
})

app.listen(3030, () => console.log('Running server') )

