const express = require ('express')
const {Router} = express 
const productsApi = require('./api/products')

//router de productos

const ProductsApi = new productsApi ()
const productsRouter = new Router ()

productsRouter.use(express.json())
productsRouter.use(express.urlencoded ({extended:true}))

productsRouter.get ('/', (req, res) => {
    res.json(ProductsApi.showAll())
})

productsRouter.get ('/:id', (req, res) => {
    res.json(ProductsApi.showItem(req.params.id))
})

productsRouter.post ('/', (req, res) => {
    res.json(ProductsApi.save(req.body))
})

productsRouter.put ('/:id', (req, res) => {
    res.json(ProductsApi.update(req.body, req.params.id))
})

productsRouter.delete ('/:id', (req, res) => {
    res.json(ProductsApi.delete(req.params.id))
})

//servidor
const app = express ()
app.use(express.static ('./public'))
app.use ('/api/products', productsRouter)

const PORT = 8080
const server = app.listen (PORT, () => {
    console.log ('el servidor http está escuchando en el puerto 8080')
})
server.on ("error", error => console.log ('error en el servidor'))