//iniciamos el servidor
const express = require("express")
const bd = require("./bd")
//creamos el servidor 
const app = express();

//mirewares
app.use(express.json())

//rutas get
//pagina principal 
app.get("/", (req, res) => {
    res.send("Pagina Principal")
});
//obtener todos los productos 
app.get("/productos", (req, res) => {
    res.json(bd)
})
//obtener los productos por su id 
app.get("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const obtenerProducto = bd.find((producto) => producto.id === id)
    res.json(obtenerProducto)
})


//puerto
app.listen(4000, ()=> {
    console.log("servidor corriendo ")
})
