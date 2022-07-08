import express from 'express'
import bodyParser from 'body-parser'
import con from './connection.js'


const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos o nome do diretorio que será publico
app.use( express.static('public') )
// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// Lista os departamentos
app.get('/departamentos', (req,res) => {

  con.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome', (err, result) => {
    res.send(result)
  })
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req,res) => {
  const { idDepartamento } = req.params

  con.query('SELECT * FROM DEPARTAMENTOS WHERE Id_Departamento = ${idDepartamento}', (err, result) => {
    res.send(result)
  })

})

// Insere um departamento
app.post('/departamentos', (req, res) => {

  console.log(req.body)
  const { nome, sigla } = req.body
  // Antes vamos validar se os dados vieram corretamente
  if (nome != undefined && sigla != undefined) {
  
    con.query(`INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('${nome}', '${sigla}')`, (err, result) =>{
      res.send(result)
    })

  } else {
    res.send({
      "message":"Nome ou Sigla não foram enviados"
    })
  }
})

// Altera por completo os dados de um departamento
app.put('/departamentos/:id_Departamento', (req, res) => {
  const { idDepartamento } = req.params
  const { nome, sigla} = req.body

  con.query(`UPDATE DEPARTAMENTOS SET nome = '${nome}', sigla = '${sigla}' WHERE id_departamento = ${idDepartamento}`, (err, result) => {
    res.send(result)
  })




})

// Altera parcialmente os dados de um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
  res.send('Altera parcialmente um departamento.')
})

// Remove um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
  
  res.send('Remove um departamento.')


})



app.listen(3030, () => console.log('Running server'))