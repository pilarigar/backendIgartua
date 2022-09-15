const express = require ('express')
const app = express()
const Container = require ('./index')
const PORT = 8080

const container = new Container ('./items.txt')

app.get  ('/products', async (req, res)=>{
  const result = await container.getAll()
  res.json (result)
})

app.get ('/randomProduct', async (req, res)=>{
  const result = await container.getRandom()
  res.json (result)
})

app.get ('/', (req, res)=>{
    res.send ('hola mundo')
})

app.listen (PORT, () => console.log ('el servidor está escuchando en puerto 8080'))

