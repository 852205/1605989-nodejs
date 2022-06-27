import { createServer } from 'http'
import { readFile} from 'fs'


createServer((req, res) => {

    res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'})

    res.write('data')
    res.end()

    })
   
listen(3030, () => {
    console.log('Running server!')
})

 

