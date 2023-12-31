const express = require("express")

const app = express()

const port = 3000

// const clientPath = app.resolve(__dirname, '../favlinks/dist')

// app.use(express.static(clientPath))

app.get('/', (req, res)=>{
res.status(200).send(`Hello World! We're live on out first server!`)
})

// app.get('/', (req, res) => {
//     // we'll do some stuff here
//     res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
//   })

app.get('/test', (req,res)=> {
    res.send(`<html><body><h1>Testing sending HTML</h1></body></html>`)
})

app.listen(port, () => {
    console.log(`Our app listetning on port ${port}`)
})

app.post('/', (req, res)=>{
    res.send(`Got a POST request`)
    })


//4 HTTP METHODS: GET, POST, PUT, DELETE

