//iniciamos el servidor
const express = require("express")
const bd = require("./bd")
//creamos el servidor 
const app = express();

//mirewares
app.use(express.json())

//RUTAS GET 
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

//RUTA POST 
//creamos un nuevo 
app.post("/productos", (req, res) => {
    const {id,producto, precio} = req.body 
    const nuevoProducto = bd.push( {id:id, producto:producto, precio:precio})
    res.json({mensaje:"producto creado con exito "})
})

//RUTA PUT 
//actualizamos un producto 
app.put("/producto/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {producto, precio} = req.body 
    const actualizar = bd.find( (producto) => producto.id === id)
    actualizar.producto = producto 
    actualizar.precio = precio 
    res.json({mensaje: "producto actualizado de forma exitosa"})
})

//RUTA DELETE
//eliminamos un producto 
app.delete("/producto/:id",(req, res)=> {
   const id = parseInt(req.params.id)
   const obtenerProducto = bd.find( (producto) => producto.id === id)
   const productoIndex = bd.indexOf(obtenerProducto)
   const eliminarProducto = bd.splice(productoIndex, 1)
   res.json({mensaje: "Producto eliminado con exitoooo"})
})

//puerto
app.listen(4000, ()=> {
    console.log("servidor  2 corriendo ")
})
