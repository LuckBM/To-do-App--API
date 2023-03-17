import express from "express";
import usuarioController from "./controllers/usuariosController.js";

const app = express()

const port = 3000

app.use(express.json())

usuarioController(app)

app.listen(port, () => {
 console.log(`Api UP acesso em : localhost:${port}`)
} )