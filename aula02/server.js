import { createServer } from 'http'
import currentDate from './currentDate.js'
import getName from './myName.js'
import getClientsByCity from './clients'

createServer((req, res) => {

    res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'})

const anoAtual = currentDate().getFullYear()
const hora = currentDate().getHours()
const min = currentDate().getMinutes()
const seg = currentDate().getSeconds()
const horafull = `${hora}:${min}:${seg}`


    res.end(`<h1>Isso é um servidor HTTP da aula02!</h1> ${anoAtual} - ${horafull} <br> ${getName()}`)
}).listen(3030, () => {
    console.log('Running server!')
})

 

