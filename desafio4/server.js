const express = require ('express')
const {Router} = express 
const productsApi = require ('./api/products')

//servidor
const app = express ()
app.use(express.static ('public'))
app.use ('/api/products', productsRouter)

const PORT = 8080
const server = app.listen (PORT, () => {
    console.log ('el servidor http está escuchando en el puerto 8080')
})
server.on ("error", error => console.log ('error en el servidor'))

//router de productos

const ProductsApi = new productsApi ()

const productsRouter = new Router ()

productsRouter.use(express.json())
productsRouter.use(express.urlencoded ({extended:true}))

productsRouter.GET ('/', (req, res) => {
    res.json(productsApi.showAll())
})

productsRouter.GET ('/:id', (req, res) => {
    res.json(productsApi.showItem(req.params.id))
})

productsRouter.POST ('/', (req, res) => {
    res.json(productsApi.save(req.body))
})

productsRouter.PUT ('/:id', (req, res) => {
    res.json(productsApi.update(req.body, req.params.id))
})

productsRouter.DELETE ('/:id', (req, res) => {
    res.json(productsApi.delete(req.params.id))
})