import express from 'express'
import bodyParser from 'body-Parser'
import con from './connection.js'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method


const app = express()

app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extend:))

app.get('/departamentos', (req,res) => {
  res.send(mockDepartamentos)
})
//lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req,res) => {
  res.send(mockDepartamentos)
})

  
  
  
  app.post('/departamentos', (req,res) => {
    res.send('Insere Departamento.')
  })
  
  app.put('/departamentos', (req,res) => {
    res.send('Altera por completo um Departamento.')
  })
  
  app.patch('/departamentos', (req,res) => {
    res.send('Altera por completo um Departamento.')
  })

  app.listen(3030, () => console.log('Running server'))