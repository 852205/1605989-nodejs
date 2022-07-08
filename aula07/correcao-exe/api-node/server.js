import express from 'express'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method


const app = express()
// Exemplo de rotas
app.get('/', (req,res) => {
    res.send('novo dado via GET')
  })
  
  app.post('/', (req,res) => {
    res.send('request feita via POST')
  })
  
  app.get('/departamentos', (req,res) => {
    res.send(mockDepartamentos)
  })
  //lista um departamento especifico
  app.get('/departamentos/:idDepartamento', (req,res) => {
    res.send(mockDepartamentos)
  })
  
  app.listen(3030, () => console.log('Running server'))